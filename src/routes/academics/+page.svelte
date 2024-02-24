<script>
// @ts-nocheck

    import Histogram from "./Histogram.svelte";
    import PieChart from "./PieChart.svelte";
    import Table from "./Table.svelte";
    import TermWam from "./TermWam.svelte";

    import data from "./transcript.json"

    const WAM = 85.645;
    
</script>

<article class="prose-lg">
    <h1>Academics</h1>
    <h2>Charts</h2>
    The grade definitions for UNSW be found
    <a
        href="https://www.student.unsw.edu.au/grade"
        class="link link-primary link-hover">here</a
    >. Note that during the first term of Covid-19 some courses where marked
    pass or fail, awarding grades of Satisfactory (SY) or Unsatisfactory (UF).
    <div class="w-full h-full flex flex-col justify-center items-center">
        <div class="w-1/2 my-6">
            <PieChart />
        </div>
        <div class="w-3/4 my-6">
            <Histogram />
        </div>
        <div class="w-3/4 my-6">
            <TermWam />
        </div>
    </div>

    <h2>Results</h2>
    <b>Current WAM: {WAM}</b>
    <br class="mb-2">
    A copy of my latest university transcipt can be viewed or downloaded
    <a
        href="https://drive.google.com/file/d/1Ec86g-izGvJ9yTrDjQB8XUm_-DKnZcMB/view?usp=sharing"
        class="link link-primary link-hover">here</a
    >.

    <div class="w-full h-96 overflow-auto m-5">
        <Table />
    </div>
</article>
