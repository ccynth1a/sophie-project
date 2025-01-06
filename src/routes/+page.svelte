<script lang="ts">
    import BarChart from '../BarChart.svelte';
    import Clock from '../Clock.svelte';
    import CustomersChart from '../CustomersChart.svelte';
    import PieChart from '../PieChart.svelte';
    import RadarChart from '../RadarChart.svelte';
    import SalesChart from '../SalesChart.svelte';

</script>

<!-- <p>Sales: {calculateSalesByGender()}</p> -->

<!-- the long bar -->
<!-- <div class=" bg-black py-8 "></div> -->
<!-- the container of the main page :3 -->
<div class=" m-4 ">
    <div class=" grid grid-cols-3 justify-center text-center items-center " >
        <!-- <Clock /> -->
    </div>
    <!-- the grid container :3 -->
    <div class=" text-white text-4xl m-2 font-bold ">
        Dashboard
    </div>
    <div class=" flex gap-4 flex-wrap ">
        <div class=" bg-gray-900 rounded-lg p-4 flex-grow w-[512px]">
            <RadarChart />
        </div>
        <div class=" bg-gray-900 rounded-lg p-4 flex-grow w-[512px] h-[246px]">
            <BarChart />
        </div>
        <div class=" bg-gray-900 rounded-lg p-4 flex-grow ">
            <PieChart />
        </div>
        <div class=" bg-gray-900 rounded-lg p-4/2 flex-grow  ">
            <SalesChart />
        </div>
        <div class=" bg-gray-900 rounded-lg p-4/2 flex-grow  ">
            <CustomersChart />
        </div>
    </div>
</div>