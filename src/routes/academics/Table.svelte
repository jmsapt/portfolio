<script>
// @ts-ignore
import data from "./transcipt.json";
import {
    onMount
} from "svelte";

// @ts-ignore
function populateTable() {
    let table = document.querySelector("table tbody");

    // clear existing rows
    // @ts-ignore
    table.innerHTML = "";

    let index = 1;
    data.forEach((row) => {
        let tablerow = document.createElement("tr");

        // assign index
        let indexcell = document.createElement("th");
        indexcell.textContent = index.toString();
        tablerow.appendChild(indexcell);

        // add data columns
        let columns = [
            row.taken.year + "T" + row.taken.term,
            row.course,
            row.name,
            row.mark,
            row.grade,
        ];
        columns.forEach((col) => {
            let cell = document.createElement("td");
            cell.textContent = col !== -1 ? col.toString() : "";
            tablerow.appendChild(cell);
        });

        // @ts-ignore
        table.appendChild(tablerow);
        index += 1;
    });
}

// Call populateTable when the DOM content is loaded
onMount(() => {
    populateTable();
})
</script>

<table class="table table-sm table-pin-rows table-pin-cols">
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
    </tbody>
</table>
