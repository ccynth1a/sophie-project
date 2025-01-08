<script lang="ts">
</script>

<!-- containererrr -->
<div class=" fixed top-0 left-0 h-screen w-screen text-transparent grid grid-cols-3 grid-rows-3 ">
    <div class=" col-start-2 row-start-2 flex flex-col items-center  ">
        <div class=" text-white text-4xl mt-4 " >Loading</div>
        <div class=" flex flex-row gap-2 mt-4 " >
            {#each {length: 40} as _, i}
                <div class=" bg-blue-400 rounded h-fit text-center py-2 ">I</div>
            {/each}
        </div>
    </div>
</div>
