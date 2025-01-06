<script lang="ts">
    import salesJSON from "$lib/sales.json"
    import { color } from "chart.js/helpers";
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
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#35CE56'], // @PHOEBE - these r the colors used in the pie chart
                color: '#FFFFFF', // @PHOEBE - this changes the text colour :33
                borderColor: '#BBBBBB',
                borderWidth: 1,
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
            },
        }
    };

</script>

<Chart type="pie" {data} {options} />