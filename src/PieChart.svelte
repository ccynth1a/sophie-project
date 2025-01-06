<script lang="ts">
    import salesJSON from "$lib/sales.json"
    import Chart from "./Chart.svelte";

    const genderSales = salesJSON.sales.reduce((accumulator: any, sale) => {
        accumulator[sale.gender] = (accumulator[sale.gender] || 0) + sale.total_spent;
        return accumulator;
    }, {});
                                                                                                                                
    const data = {
        labels: Object.keys(genderSales),
        datasets: [
            {
                label: 'Total Spending',
                data: Object.values(genderSales),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // @PHOEBE - these r the colors used in the pie chart
                color: '#FFFFFF' // @PHOEBE - this changes the text colour :33
            }
        ]
    }
                                                                                                                                
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#FFFFFF' // @PHOEBE
                }
            },
            title: {
                display: true,
                text: "Spending By Gender",
                color: '#FFFFFF' // @PHOEBE
            }
        }
    };

</script>

<Chart type="pie" {data} {options} />