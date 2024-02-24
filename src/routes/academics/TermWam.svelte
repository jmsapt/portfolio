<script lang="js">
    // @ts-nocheck
    export let num_buckets = 6;
    export let upper_bound = 100;
    export let lower_bound = 70;

    import Chart from "./Chart.svelte";
    import transcript from "./transcript.json";
    const map = new Map();

    transcript.forEach((result) => {
        if (result.mark > 0) {
            let term = result.taken.year + "T" + result.taken.term;
            let array = map.get(term);
            if (array === undefined) {
                map.set(term, [result.mark]); // Create a new array if the term is not yet in the map
            } else {
                array.push(result.mark); // Add the mark to the existing array
                map.set(term, array); // Update the array in the map
            }
        }
    });

    let [labels, term] = [[], []];

    for (let [key, value] of map.entries()) {
        labels.push(key);
        let term_marks = value.filter((x) => x > 0);
        term.push(term_marks.reduce((a, b) => a + b) / term_marks.length);
    }

    const data = {
        labels: labels,
        tooltips: false,
        datasets: [
            {
                data: term,
                backgroundColor: "#1d7dd1",
                borderWidth: 0,
            },
        ],
    };

    const config = {
        type: "bar",
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    min: 70,
                    max: 100,
                    step: 10,
                    ticks: {
                        // forces step size to be 50 units
                        stepSize: 5,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: "WAM by Term",
                    font: {
                        // Increase font size of the chart title
                        size: 24, // Adjust the font size as per your preference
                        style: "white",
                    },
                },
            },
        },
    };
</script>

<Chart {config} />
