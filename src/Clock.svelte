<script lang="ts">
    let date = new Date();
    let time = $state(date.toLocaleTimeString())
</script>

<span>
    {time}
</span>