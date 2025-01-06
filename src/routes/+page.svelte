<script lang="ts">
    import salesJSON from '$lib/sales.json'
    import { json } from '@sveltejs/kit';
    import { onMount } from 'svelte';

    const calculateSalesByGender = () => {
        let genderSales = {
            Male: 0,
            Female: 0,
            Other: 0
        }
        salesJSON.sales.forEach(sale => {
           switch (sale.gender) {
                case "Male":
                    genderSales.Male++;
                    break;
                case "Female":
                    genderSales.Female++;
                    break;
                default:
                    genderSales.Other++;
           } 
        });
        return JSON.stringify(genderSales)
    }
</script>

<!-- <p>Sales: {calculateSalesByGender()}</p> -->

<!-- the long bar -->
<!-- <div class=" bg-black py-8 "></div> -->
<!-- the container of the main page :3 -->
<div class=" m-1 ">
    <!-- the grid container :3 -->
    <div class=" grid grid-cols-2 grid-rows-3 gap-2 h-[512px] ">
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
            PROGRAMS
            <!-- <Chart type="pie" {chartData} {chartOptions} /> -->
        </div>
        <div class=" border-4 border-blue-500 rounded-lg p-1 col-span-1 ">
            NETWORK USAGE
        </div>
    </div>
</div>