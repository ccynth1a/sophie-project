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

<span>
    {time}
</span>