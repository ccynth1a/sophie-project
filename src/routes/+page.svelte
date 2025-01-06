<script lang="ts">
    import BarChart from '../BarChart.svelte';
    import Clock from '../Clock.svelte';
    import PieChart from '../PieChart.svelte';
    import RadarChart from '../RadarChart.svelte';
    import SalesChart from '../SalesChart.svelte';

</script>

<!-- <p>Sales: {calculateSalesByGender()}</p> -->

<!-- the long bar -->
<!-- <div class=" bg-black py-8 "></div> -->
<!-- the container of the main page :3 -->
<div class=" m-4 ">
    <div class=" p-4 bg-gray-800 text-white rounded-xl">
        <div class=" grid grid-cols-3 justify-center text-center items-center " >
            <!-- <Clock /> -->
        </div>
        <!-- the grid container :3 -->
        <div class=" grid grid-cols-2 grid-rows-3 gap-4 h-[875px] ">
            <!-- top thang :3 -->
            <div class=" border-4 border-green-400 rounded-lg p-4 col-span-2 ">
                <BarChart />
            </div>
            <!-- middle left thang -->
            <div class=" border-4 border-yellow-400 rounded-lg p-4 col-span-1 ">
                <SalesChart />
            </div>
            <!-- bottom right thang :3 -->
            <div class=" border-4 border-red-400 rounded-lg p-4 col-span-1 row-span-2 ">
                <div class=" 2xl:grid 2xl:grid-rows-1 2xl:grid-cols-5 ">
                    <div class=" col-span-3 col-start-2 ">
                        <PieChart />
                    </div>
                </div>
            </div>
            <div class=" border-4 border-blue-400 rounded-lg p-4 col-span-1 ">
                <RadarChart />
            </div>
        </div>
    </div>
</div>