<script lang="ts">
    import { databaseQueryData } from "$lib/globals";
    import salesJSON from "$lib/sales.json"
    import Chart from "./Chart.svelte";

    let dailySales = {}
    
    // Calculate the total sales for each unique day
    const unsubscribe = databaseQueryData.subscribe(data => {
        dailySales = data.reduce((accumulator: any, sale) => {
            accumulator[sale.purchase_date.toDate().toISOString().split('T')[0]] = (accumulator[sale.purchase_date.toDate().toISOString().split('T')[0]] || 0) + sale.total_spent;
            return accumulator
        }, {})  
    })
    const data = {
        labels: Object.keys(dailySales).sort((a,b) => new Date(a).getTime() - new Date(b).getTime()),
        datasets: [
            {
                label: 'Total Sales',
                data: Object.values(dailySales),
                borderColor: '#4BC0C0', // @PHOEBE - the line colour
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
                text: "Daily Sales",
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
                    text: "Total Sales",
                    color: '#FFFFFF'
                },
                ticks: {
                    color: '#E9E9E9'
                },
                grid: {
                    color: '#BBBBBB'
                }
            }
        }
    }
</script>
<Chart type="line" {data} {options} />
