<script lang="ts">
    export let repo: string | null = null;
    export let link: string | null = null;
    export let name: string;
    export let description: string;
    export let tags: string[];

    let paragraphs = description.split("\n");
    console.log(paragraphs);

    let badges = new Map([
        ["rust", "badge-error"],
        ["javascript", "badge-warning"],
        ["html", "badge-accent"],
    ]);
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
    tabindex="0"
    class="collapse collapse-arrow border border-base-300 bg-base-200"
>
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium">
        <b>{name}</b>
        {#each tags as tag}
            <div class={"badge mx-1 " + badges.get(tag.toLocaleLowerCase())}>
                {tag}
            </div>
        {/each}
    </div>
    <div class="collapse-content">
        <p>
            {#each paragraphs as text}
                {text}
                <br class="mt-4" />
            {/each}
        </p>
        {#if repo || link}
            <div class="flex-row flex mt-2">
                {#if repo}
                    <div class="flex items-center m-1">
                        <svg
                            class="w-12 h-12 m-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 1C5.373 1 0 6.373 0 13c0 5.656 3.673 10.442 8.774 12.135.64.118.873-.277.873-.616 0-.304-.011-1.108-.017-2.176-3.558.773-4.315-1.717-4.315-1.717-.582-1.476-1.422-1.871-1.422-1.871-1.163-.793.088-.775.088-.775 1.286.092 1.963 1.318 1.963 1.318 1.142 1.953 2.996 1.387 3.729 1.059.115-.826.447-1.388.814-1.706-2.846-.32-5.834-1.423-5.834-6.333 0-1.398.5-2.537 1.317-3.434-.131-.32-.572-1.625.126-3.385 0 0 1.073-.343 3.507 1.31a12.37 12.37 0 013.205-.43c1.083.003 2.175.145 3.205.43 2.433-1.653 3.505-1.31 3.505-1.31.699 1.76.258 3.065.127 3.385.82.897 1.315 2.036 1.315 3.434 0 4.921-2.991 6.011-5.849 6.327.459.396.869 1.17.869 2.355 0 1.7-.015 3.068-.015 3.484 0 .341.228.739.881.615C20.333 23.44 24 18.656 24 13c0-6.627-5.373-12-12-12z"
                            />
                        </svg>
                        <div>
                            <p class="font-medium m-1"><b>Repository</b></p>
                            <p class="font-medium m-1">
                                <a
                                    href={"http://" + repo}
                                    class="link link-primary link-hover"
                                    >{repo}</a
                                >
                            </p>
                        </div>
                    </div>
                {/if}
                {#if link}
                    <div class="flex items-center m-1">
                        <svg
                            class="w-12 h-12 m-4"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 420 420"
                        >
                            <path
                                stroke-width="26"
                                d="M209,15a195,195 0 1,0 2,0z"
                            />
                            <path
                                stroke-width="18"
                                d="m210,15v390m195-195H15M59,90a260,260 0 0,0 302,0 m0,240 a260,260 0 0,0-302,0M195,20a250,250 0 0,0 0,382 m30,0 a250,250 0 0,0 0-382"
                            />
                        </svg>
                        <div>
                            <p class="font-medium m-1"><b>Link</b></p>
                            <p class="font-medium m-1">
                                <a
                                    href={"http://" + link}
                                    class="link link-primary link-hover"
                                    >{link}</a
                                >
                            </p>
                        </div>
                    </div>
                {/if}
            </div>
        {/if}
    </div>
</div>
