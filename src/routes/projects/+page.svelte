<script>
    // @ts-nocheck
    // import projects from "./projects.json";
    import Project from "./Project.svelte";
    import yaml from "js-yaml";
    import { onMount } from "svelte";

    let projects = [];
    onMount(async () => {
        try {
            const response = await fetch("./projects.yaml");
            const yamlData = await response.text();
            projects = yaml.load(yamlData);
        } catch (error) {
            console.error("Error loading YAML file:", error);
        }

        console.log(projects)
    });

</script>

{#each projects as { name, description, repo, link, tags }}
    <div class="p-1">
        <Project {name} {description} {repo} {link} {tags}/>
    </div>
{/each}
