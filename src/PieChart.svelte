<script lang="ts">
    import salesJSON from "$lib/sales.json"
    import { color } from "chart.js/helpers";
    import Chart from "./Chart.svelte";
    import { databaseQueryData } from "$lib/globals";
    import { onDestroy } from "svelte";

    let genderSales: number[] = [];
    // Calculate the sales for each unique gender
                    
    const unsubscribe = databaseQueryData.subscribe(data => { // svelte stores handle lifecycle independently to the rest of the component. despite no path to this function, its called on initialisation anyways
        if (data.length > 0) { // check for non empty database query
            genderSales = data.reduce((accumulator: any, sale) => {
                accumulator[sale.gender] = (accumulator[sale.gender] || 0) + sale.total_spent;
                return accumulator;
            }, {})
        }
    });

    const data = {
        labels: Object.keys(genderSales),
        datasets: [
            {
                label: 'Total Spending',
                data: Object.values(genderSales),
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'], // @PHOEBE - these r the colors used in the pie chart
                color: '#FFFFFF', // @PHOEBE - this changes the text colour :33
                borderColor: '#111827',
                borderWidth: 2,
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

    onDestroy(() => unsubscribe()) // trigger refresh

</script>

<Chart type="pie" {data} {options} />