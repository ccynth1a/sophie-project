<script lang="ts">
    import salesJSON from "$lib/sales.json"
    import Chart from "./Chart.svelte";

    // Get the number of customers per each unique day
    const dailyCustomers = salesJSON.sales.reduce((prevSale: any, sale) => {
        prevSale[sale.purchase_date] = (prevSale[sale.purchase_date] || 0) + 1;
        return prevSale;
    }, {})
                                                                                                 
    const data = {
        labels: Object.keys(dailyCustomers).sort((a,b) => new Date(a).getTime() - new Date(b).getTime()),
        datasets: [
            {
                label: 'Total Customers',
                data: Object.values(dailyCustomers),
                borderColor: '#9966FF', // @PHOEBE - the line colour
                tension: 0.4, // @PHOEBE - that boogleersing of the lines connecting eachtoher
                fill: false
            }
        ]
    }
                                                                                                     
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', // @PHOEBE
                labels: {
                    color: '#FFFFFF'
                }
            },
            title: {
                display: true,
                text: "Daily Customers",
                color: '#FFFFFF'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                    color: '#FFFFFF'
                },
                ticks: {
                    color: '#E9E9E9'
                },
                grid: {
                    color: '#BBBBBB'
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Total Customers",
                    color: '#FFFFFF'
                },
                ticks: {
                    color: '#E9E9E9',
                    min: 0,
                },
                grid: {
                    color: '#BBBBBB'
                }
            }
        }
    }
</script>
<Chart type="line" {data} {options} />
