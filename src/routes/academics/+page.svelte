<script>
    import Histogram from "./Histogram.svelte";
    import PieChart from "./PieChart.svelte";
    import Table from "./Table.svelte";

</script>

<article class="prose-lg">
    <h1>Academics</h1>
    <h2>Charts</h2>

    <div class="w-full h-full flex flex-col justify-center items-center">
        <div class="w-1/2 pb-10">
            <PieChart />
        </div>
        <div class="w-3/4 pb-10">
            <Histogram />
        </div>
    </div>

    <h2>Results</h2>
    A copy of my latest university transcipt can be viewed or downloaded <a
        href="https://drive.google.com/file/d/1Ec86g-izGvJ9yTrDjQB8XUm_-DKnZcMB/view?usp=sharing"
        class="link link-primary">here</a
    >.

    <div class="w-full h-96 overflow-auto m-5">
        <Table />
    </div>
</article>
