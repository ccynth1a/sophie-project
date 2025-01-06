<script lang="ts">
    import { onMount} from "svelte";
    import { Chart } from "chart.js/auto";

    let { type, data, options } = $props()

    let chartCanvas: any;
    let chartInstance: any;

    onMount(() => {
        if (chartCanvas) {
            chartInstance = new Chart(chartCanvas, {
                type,
                data,
                options
            })
        }

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        }
    })
</script>

<canvas bind:this={chartCanvas}></canvas>