<script>
// @ts-nocheck

import Chart from "./Chart.svelte";
import transcript from "./transcipt.json";

let showCounts = true; // Initially, show counts

const grades = ["SY", "CR", "DN", "HD"];
const gradeCounts = grades.map(
    (grade) => transcript.filter((result) => result.grade === grade).length,
);

const totalGrades = gradeCounts.reduce((total, count) => total + count, 0);
const gradePercentages = gradeCounts.map((count) =>
    ((count / totalGrades) * 100).toFixed(2),
);

const data = {
    labels: grades,
    datasets: [{
        data: showCounts ? gradeCounts : gradePercentages,
        backgroundColor: ["#c72626", "#2c8a19", "#1d7dd1", "#daf542"],
        borderWidth: 0,
    }, ],
};

const pie_chart = {
    type: "pie",
    data: data,
    options: {
        borderRadius: "5",
        responsive: true,
        cutout: "0%",
        plugins: {
            legend: {
                position: "bottom",
                display: true,
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        size: 16,
                    },
                },
            },
            title: {
                display: true,
                text: "Grades",
                font: { // Increase font size of the chart title
                    size: 24, // Adjust the font size as per your preference
                    style: 'white'
                },
            },
        },
    },
};
</script>

<Chart config={pie_chart} />
