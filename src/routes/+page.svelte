<script lang="ts">
    import salesJSON from '$lib/sales.json'
    import { json } from '@sveltejs/kit';
    import { onMount } from 'svelte';
    import Chart from '../Chart.svelte';

    const calculateSalesByAge = () => {
        let ageSales = {
            under18: 0,
            youngAdult: 0,
            adult: 0,
            middleAged: 0,
            elderly: 0
        }
        salesJSON.sales.forEach(sale => {
            if (sale.age < 18) {
                ageSales.under18++;
            } else if (sale.age < 25) {
                ageSales.youngAdult++;
            } else if (sale.age < 40) {
                ageSales.adult++;
            } else if (sale.age < 65) {
                ageSales.middleAged++;
            } else {
                ageSales.elderly++;
            }
        })
        return ageSales
    }

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
                color: '#FFFFFF' // @PHOEBE - this changes the text colour :33
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
</script>

<!-- <p>Sales: {calculateSalesByGender()}</p> -->

<!-- the long bar -->
<!-- <div class=" bg-black py-8 "></div> -->
<!-- the container of the main page :3 -->
<div class=" m-4 ">
        <div class=" p-4 bg-gray-800 text-white rounded-xl">
            <!-- the grid container :3 -->
            <div class=" grid grid-cols-2 grid-rows-3 gap-4 h-[900px] ">
                <!-- top thang :3 -->
                <div class=" border-4 border-green-400 rounded-lg p-4 col-span-2 ">
                    the greengoler
                </div>
                <!-- middle left thang -->
                <div class=" border-4 border-yellow-400 rounded-lg p-4 col-span-1 ">
                    yammeerrring yellow
                </div>
                <!-- bottom right thang :3 -->
                <div class=" border-4 border-red-400 rounded-lg p-4 col-span-1 row-span-2 ">
                    <Chart type="pie" data={pieChartData} options={pieChartOptions} />
                </div>
                <div class=" border-4 border-blue-400 rounded-lg p-4 col-span-1 ">
                    blue waffles
                </div>
            </div>
        </div>
</div>