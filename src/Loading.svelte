<script lang="ts">
    import { onMount } from "svelte";
    import { getDocs, collection } from "firebase/firestore";
    import { databaseQueryData, dbLoaded } from "$lib/globals";
    import { db } from "$lib/firebase";
    import type { Sale } from "$lib/types";

    let progress = $state(0);

    onMount(async () => {
        const sales = await getDocs(collection(db,'sale')); // fetch data from the database.
        databaseQueryData.set(sales.docs.map(doc => doc.data()) as Sale[]) // set global database store to the data fetched
    
        progress = 100;
        dbLoaded.set(true)
    })

    setInterval(() => {
        if (progress < 100) {
            progress += Math.floor(Math.random() * 3)
        } 
    }, 100);
</script>
<div class="absolute top-0.5 left 0.5">
    <div class="flex mx-auto justify-between mb-1">
      <span class="text-base font-medium text-blue-700 dark:text-white">Loading...</span>
      <span class="text-sm font-medium text-blue-700 dark:text-white">{progress}%</span>
    </div>
    <div class="mx-auto w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div class="bg-blue-600 h-2.5 rounded-full" style="width: {progress}%"></div>
    </div>
</div>