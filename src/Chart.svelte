<!-- THIS IS A GENERIC CHART COMPONENT WHICH WILL HAVE ITS OPTIONS PASSED DOWN AS PROPS. THIS IS JUST BOILERPLATE PREVENTION -->
<script lang="ts">
    import { onMount} from "svelte";
    import { Chart } from "chart.js/auto";

    let { type, data, options } = $props()

    let chartCanvas: HTMLCanvasElement | undefined;
    let chartInstance: Chart | undefined;

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