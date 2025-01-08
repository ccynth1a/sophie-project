<script lang="ts">
    import { databaseQueryData } from "$lib/globals";
    import Chart from "./Chart.svelte";
    import type { Sale } from "$lib/types";
    import { onDestroy } from "svelte";

    // Age groups with defined bounds for the bar chart
    const ageGroups = [
        { name: 'Under 18', min: 0, max: 17 },
        { name: '18-25', min: 18, max: 25 },
        { name: '26-40', min: 26, max: 40 },
        { name: '41-60', min: 41, max: 60 },
        { name: '60+', min: 61, max: Infinity },
    ];

    let ageSales = Array(ageGroups.length).fill(0); // 0 initialise the data to make sure the page loads correctly

    const unsubscribe = databaseQueryData.subscribe(data => { // svelte stores handle lifecycle independently to the rest of the component. despite no path to this function, its called on initialisation anyways
        if (data.length > 0) { // check for non empty database query
            ageSales = ageGroups.map(group => {
                return data.filter((sale: Sale) => sale.age >= group.min && sale.age <= group.max).length;
            })
        }
    });

    const data = {
        labels: ageGroups.map(group => group.name), // get labels
        datasets: [
            {
                label: 'Number of Sales',
                data: ageSales,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
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
                    color: '#FFFFFF'
                }
            },
            title: {
                color: '#FFFFFF',
                display: true,
                text: 'Sales by Age Group'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Age Group',
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
                    text: 'Total Sales',
                    color: '#FFFFFF'
                },
                ticks: {
                    color: '#E9E9E9'
                },
                grid: {
                    color: '#BBBBBB'
                }
            },
        }
    }

    onDestroy(() => unsubscribe()) // trigger refresh
</script>
  
<Chart type="bar" {data} {options} />