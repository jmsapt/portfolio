<script>
    import { base } from "$app/paths";
</script>

<div class="drawer flex justify-center items-center">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div
        class="drawer-content flex flex-col max-w-screen-lg justify-between p-3 w-full"
    >
        <div class="navbar">
            <div class="flex-none lg:hidden">
                <label
                    for="my-drawer-3"
                    aria-label="open sidebar"
                    class="btn btn-square btn-ghost"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block w-6 h-6 stroke-current"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path></svg
                    >
                </label>
            </div>
            <div class="flex-1">
                <a href="{base}/" class="btn btn-ghost text-xl"
                    >James Appleton</a
                >
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 text-base">
                    <li><a href="{base}/resume/">Resume</a></li>
                    <li><a href="{base}/academics/">Academics</a></li>
                    <li><a href="{base}/projects/">Projects</a></li>
                    <li><a href="{base}/contact/">Contact</a></li>
                    <!-- <li><a href="/blog">Blog</a></li> -->
                </ul>

                <!-- TODO: Add back when implemented -->

                <!-- <div>
                    <a href="{base}/" class="btn bg-base-100 btn-ghost">Blog</a>
                </div> -->
            </div>
        </div>
    </div>

    <div class="drawer-side">
        <label
            for="my-drawer-3"
            aria-label="close sidebar"
            class="drawer-overlay"
        ></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200">
            <!-- Sidebar content here -->
            <ul class="menu menu-vertical px-1 text-base">
                <li><a href="{base}/resume/">Resume</a></li>
                <li><a href="{base}/academics/">Academics</a></li>
                <li><a href="{base}/projects/">Projects</a></li>
                <li><a href="{base}/contact/">Contact</a></li>
                <!-- <li><a href="/blog">Blog</a></li> -->
            </ul>
        </ul>
    </div>
</div>
