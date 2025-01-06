<script lang="ts">
    import salesJSON from "$lib/sales.json"
    import Chart from "./Chart.svelte";

    // Calculate the total sales for each unique location
    const salesByLocation = salesJSON.sales.reduce((accumulator: any, sale) => {
        accumulator[sale.location] = (accumulator[sale.location] || 0) + sale.total_spent;
        return accumulator
    }, {})

    const labels = Object.keys(salesByLocation);
    const salesData: any = Object.values(salesByLocation);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Gross Sales By Location',
                data: salesData,
                borderColor: '#FFCE56',
                backgroundColor: 'rgba(255, 206, 86, 0.2)', 
                pointBackgroundColor: '#FFCE56', 
                pointBorderColor: '#FFFFFF', 
                pointBorderWidth: 1,
                pointRadius: 5,
                fill: true 
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
                display: true,
                text: "Revenue by Location",
                color: '#FFFFFF'
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: '#BBBBBB'
                },
                suggestedMin: 0,
                suggestedMax: Math.max(...salesData) * 1.2,
                grid: {
                    color: '#BBBBBB'
                },
                ticks: {
                    display: true,
                    color: '#E9E9E9',
                    backdropColor: 'rgba(0,0,0,0.5)'
                },
                pointLabels: {
                    color: '#FFFFFF'
                }
            }
        }
    }
</script>

<Chart type="radar" {data} {options} />