<script>
    // @ts-nocheck

    // @ts-ignore
    import data from "./transcript.json";
    import { onMount } from "svelte";
</script>

<table class="table table-md table-pin-rows table-pin-cols">
    <thead>
        <tr>
            <th></th>
            <td>Term</td>
            <td>Course Code</td>
            <td>Course Name</td>
            <td>Mark</td>
            <td>Grade</td>
        </tr>
    </thead>
    <tbody>
        {#each data as { name, course, mark, grade, taken }, i}
            <tr>
                <td>{i + 1}</td>
                <td>{taken.year + "T" + taken.term}</td>
                <td>{course}</td>
                <td>{name}</td>
                <td>{mark > 0 ? mark : ""}</td>
                <td>{grade}</td>
            </tr>
        {/each}
    </tbody>
</table>
