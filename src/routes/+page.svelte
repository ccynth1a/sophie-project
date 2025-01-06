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
        <!-- <div class=" grid grid-cols-2 grid-rows-4 gap-4 "> -->
        <div class=" flex gap-4 flex-wrap ">
            <div class=" border-4 border-green-400 rounded-lg p-4 w-1/4 flex-grow ">
                <RadarChart />
            </div>
            <div class=" border-4 border-blue-400 rounded-lg p-4 w-fit flex-grow ">
                <BarChart />
            </div>
            <div class=" border-4 border-red-400 rounded-lg p-4 w-fit flex-grow ">
                <PieChart />
            </div>
            <div class=" border-4 border-yellow-400 rounded-lg p-4 w-1/2 flex-grow ">
                <SalesChart />
            </div>
        </div>
    </div>
</div>