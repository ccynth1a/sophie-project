<script lang="ts">
    import BarChart from '../BarChart.svelte';
    import Clock from '../Clock.svelte';
    import CustomersChart from '../CustomersChart.svelte';
    import Metrics from '../Metrics.svelte';
    import PieChart from '../PieChart.svelte';
    import RadarChart from '../RadarChart.svelte';
    import SalesChart from '../SalesChart.svelte';

    import { collection, getDocs } from 'firebase/firestore';

    import type { Sale } from '$lib/types';

    import { db } from '$lib/firebase';
    import { onMount } from 'svelte';

    import { databaseQueryData, dbLoaded } from '$lib/globals';
    import Loading from '../Loading.svelte';

    let start: string;
    let end: string;

    const unsubscribe = () => {
       databaseQueryData.subscribe(data => {
        console.log(data)                                                                                 
        if (data.length > 0) {
            const dates: Date[] = data.map(sale => new Date(sale.purchase_date.seconds * 1000));
            start = new Date(Math.min(...dates.map(date => date.getTime()))).toISOString().split('T')[0];
            end = new Date(Math.max(...dates.map(date => date.getTime()))).toISOString().split('T')[0];
        }
       })
    }
    onMount(async () => {
       databaseQueryData.subscribe(data => {
        console.log(data)
        if (data.length > 0) {
            const dates: Date[] = data.map(sale => new Date(sale.purchase_date.seconds * 1000));
            start = new Date(Math.min(...dates.map(date => date.getTime()))).toISOString().split('T')[0];
            end = new Date(Math.max(...dates.map(date => date.getTime()))).toISOString().split('T')[0];
        }
       })
    })

    onMount(() => unsubscribe())

</script>

<!-- <p>Sales: {calculateSalesByGender()}</p> -->

<!-- the long bar -->
<!-- <div class=" bg-black py-8 "></div> -->
<!-- the container of the main page :3 -->
<div class=" m-4 ">
    <div class=" grid grid-cols-3 justify-center text-center items-center " >
        <!-- <Clock /> -->
    </div>
    {#if $dbLoaded}
    <!-- {#if start == "itsnotthis"} -->
    <!-- header thnang -->
    <div class=" text-white ">
        <div class=" text-4xl font-semibold " > Dashboard </div>
        <div class=" text-2xl mt-2 mb-4 font-light ">
            Showing metrics between {start} and {end}.
        </div>
    </div>
    <!-- Totals -->
    <Metrics />
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
    {:else}
        <Loading />
    {/if}

</div>

<style>
    .card{
        background: #111827;
        border-radius: 0.5rem;
        height: 100%;
        width: 100%;
        padding: 1rem;
    }
    .card:hover{
        background: #1f2937;
    }
</style>