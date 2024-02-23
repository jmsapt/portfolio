<script>
import {
    onMount
} from 'svelte';
import Chart from 'chart.js/auto';

/**
 * @type {HTMLCanvasElement}
 */
let portfolio;

/**
 * @type {import("chart.js/auto").ChartConfiguration<keyof import("chart.js/auto").ChartTypeRegistry, (number | [number, number] | import("chart.js/auto").Point | import("chart.js/auto").BubbleDataPoint | null)[], unknown> | import("chart.js/auto").ChartConfigurationCustomTypesPerDataset<keyof import("chart.js/auto").ChartTypeRegistry, (number | [number, number] | import("chart.js/auto").Point | import("chart.js/auto").BubbleDataPoint | null)[], unknown>}
 */
export let config;

onMount(() => {
    const ctx = portfolio.getContext('2d');

    // Initialize chart using default config set
    // @ts-ignore
    var myChart = new Chart(ctx, config);
})
</script>

<canvas bind:this={portfolio} class="justify-center"/>
