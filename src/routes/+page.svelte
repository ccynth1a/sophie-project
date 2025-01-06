<script lang="ts">
    import salesJSON from '$lib/sales.json'
    import { json } from '@sveltejs/kit';
    import { onMount } from 'svelte';
    import Chart from '../Chart.svelte';

    const genderSales = salesJSON.sales.reduce((accumulator: any, sale) => {
        accumulator[sale.gender] = (accumulator[sale.gender] || 0) + sale.total_spent;
        return accumulator;
    }, {});

    const pieChartData = {
        labels: Object.keys(genderSales),
        datasets: [
            {
                label: 'Total Spending',
                data: Object.values(genderSales),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // @PHOEBE - these r the colors used in the pie chart
                color: '#FFFFFF' // @PHOEBE
            }
        ]
    }

    const pieChartOptions = {
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

    const dailySales = salesJSON.sales.reduce((accumulator: any, sale) => {
        accumulator[sale.purchase_date] = (accumulator[sale.purchase_date] || 0) + sale.total_spent;
        return accumulator
    }, {})

    const salesChartData = {
        labels: Object.keys(dailySales),
        datasets: {
            label: 'Total Sales',
            data: Object.values(dailySales),
            borderColor: '#36A2EB', // @PHOEBE
            tension: 0.4, // @PHOEBE
            fill: false
        }
    }

    const salesChartOptions = {
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

<!-- <p>Sales: {calculateSalesByGender()}</p> -->

<!-- the long bar -->
<!-- <div class=" bg-black py-8 "></div> -->
<!-- the container of the main page :3 -->
<div class=" m-4 ">
    <div class=" bg-gradient-to-br from-rose-200 to-pink-400  h-full p-3 rounded-xl ">
        <div class=" p-4 bg-gray-800 text-white rounded-xl">
            <!-- the grid container :3 -->
            <div class=" grid grid-cols-2 grid-rows-3 gap-4 h-[875px] ">
                <!-- top thang :3 -->
                <div class=" border-4 border-green-900 rounded-lg p-1 col-span-2 ">
                    CPU USAGE
                </div>
                <!-- middle left thang -->
                <div class=" border-4 border-yellow-500 rounded-lg p-1 col-span-1 ">
                    MEMORY USAGE
                </div>
                <!-- bottom right thang :3 -->
                <div class=" border-4 border-red-400 rounded-lg p-1 col-span-1 row-span-2 ">
                    <Chart type="pie" data={pieChartData} options={pieChartOptions} />
                </div>
                <div class=" border-4 border-blue-500 rounded-lg p-1 col-span-1 ">
                    NETWORK USAGE
                </div>
            </div>
        </div>
    </div>
</div>