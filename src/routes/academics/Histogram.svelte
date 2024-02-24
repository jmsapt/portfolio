<script lang="js">
// @ts-nocheck
export let num_buckets = 6;
export let upper_bound = 100;
export let lower_bound = 70;

import Chart from "./Chart.svelte";
import transcript from "./transcript.json";

const bucket_size = (upper_bound - lower_bound) / num_buckets;
let showCounts = true; // Initially, show counts

const labels = []
for (let i = 0; i < num_buckets; i++) {
    let x = lower_bound + i * bucket_size;
    labels.push(x + "-" + (x + bucket_size));
}

const values = new Array(num_buckets).fill(0);
transcript.forEach(result => {
    if (result.mark !== -1) {
        let index = Math.floor((result.mark - lower_bound) / bucket_size);
        values[index] += 1;
    }
});

console.log(values, labels);

const data = {
    labels: labels,
    tooltips: false,
    datasets: [{
        data: values,
        backgroundColor: "#1d7dd1",
        borderWidth: 0,
    }, ],
};

const histogram = {
    type: "bar",
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Histogram of Marks",
                font: { // Increase font size of the chart title
                    size: 24, // Adjust the font size as per your preference
                    style: 'white'
                },
            },
        },
    },
};
</script>

<Chart config={histogram} />
