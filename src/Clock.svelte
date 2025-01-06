<script lang="ts">
    import { onMount } from "svelte";

    let hour = $state(0);
    let mins = $state(0);
    let seconds = $state(0);

    onMount(() => {
        setInterval(() => {
            const date = new Date();
            hour = date.getHours();
            mins = date.getMinutes();
            seconds = date.getSeconds();
        }, 100);
    })
</script>

<span class='col-start-2 bg-gray-800 mx-64'>
    {hour}:{mins}:{seconds}
</span>