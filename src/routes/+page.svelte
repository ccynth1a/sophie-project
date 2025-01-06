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
    <!-- <div class=" text-white text-4xl m-2 font-bold ">
        Dashboard
    </div> -->
    <!-- Totals -->
    <div class=" gap-4 grid grid-cols-3 text-white ">
        <div class=" card ">
            Total Sales :
        </div>
        <div class=" card ">
            Total Sales :
        </div>
        <div class=" card ">
            Total Sales :
        </div>
    </div>
    <!-- Charts :) -->
    <div class=" mt-4 gap-4 grid grid-cols-4 ">
        <!-- Revenue by location -->
        <div class=" card ">
            <RadarChart />
        </div>
        <!-- Sales by age group -->
        <div class=" card col-span-2">
            <BarChart />
        </div>
        <!-- Spending by gender -->
        <div class=" card ">
            <PieChart />
        </div>
        <!-- Daily Sales -->
        <div class=" card col-span-2">
            <SalesChart />
        </div>
        <!-- Daily Customers -->
        <div class=" card col-span-2">
            <CustomersChart />
        </div>
    </div>
</div>

<style>
    .card{
        background: #111827;
        border-radius: 0.5rem;
        height: 100%;
        width: 100%;
        padding: 1rem;
    }
</style>