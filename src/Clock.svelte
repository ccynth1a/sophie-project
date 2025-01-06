<script lang="ts">
    let date = new Date();
    let time = $state(date.toLocaleTimeString())
</script>

<span class=' col-start-2 bg-gray-800 mx-64'>
    {time}
</span>