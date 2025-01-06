<script lang="ts">
    import { onMount } from "svelte";

    let date = new Date();
    let time = $state(date.toLocaleTimeString())

    onMount(() => {
        setInterval(() => {
           time = date.getDate().toLocaleString()
        }, 100);
    })
</script>

<span class=' col-start-2 bg-gray-800 mx-64'>
    {time}
</span>