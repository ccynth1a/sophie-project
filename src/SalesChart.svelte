<script lang="ts">
    import salesJSON from "$lib/sales.json"
    import Chart from "./Chart.svelte";

    const dailySales = salesJSON.sales.reduce((accumulator: any, sale) => {
        accumulator[sale.purchase_date] = (accumulator[sale.purchase_date] || 0) + sale.total_spent;
        return accumulator
    }, {})
                                                                                                 
    const data = {
        labels: Object.keys(dailySales),
        datasets: [
            {
                label: 'Total Sales',
                data: Object.values(dailySales),
                borderColor: '#36A2EB', // @PHOEBE
                tension: 0.4, // @PHOEBE
                fill: false
            }
        ]
    }
                                                                                                     
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' // @PHOEBE
            },
            title: {
                display: true,
                text: "Daily Sales"
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Total Sales"
                }
            }
        }
    }
</script>
<Chart type="line" {data} {options} />
