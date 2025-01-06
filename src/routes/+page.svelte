<script lang="ts">
    import PieChart from '../PieChart.svelte';
    import SalesChart from '../SalesChart.svelte';

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
                    <SalesChart />
                    yammeerrring yellow
                </div>
                <!-- bottom right thang :3 -->
                <div class=" border-4 border-red-400 rounded-lg p-4 col-span-1 row-span-2 ">
                    <div class=" grid grid-rows-1 grid-cols-3 w-fit h-full ">
                        <div>hee</div>
                        <PieChart />
                    </div>
                </div>
                <div class=" border-4 border-blue-400 rounded-lg p-4 col-span-1 ">
                    blue waffles
                </div>
            </div>
        </div>
</div>