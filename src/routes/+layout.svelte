<script>
    // tailwind
    import "tailwindcss/tailwind.css";
    const alignment = "w-full flex items-center justify-center";
    // page components
    import Navbar from "./Navbar.svelte";
    import Footer from "./Footer.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="output.css" />
</svelte:head>

<div class="items-center justify-center min-h-screen flex-col flex">
    <div class="w-full flex justify-center items-center bg-base-300">
        <Navbar />
    </div>

    <div class="w-full max-w-screen-lg text-left flex-1 p-5">
            <slot />
    </div>

    <div class="w-full flex">
        <Footer />
    </div>
</div>
