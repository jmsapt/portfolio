<script>
    import { base } from "$app/paths";
</script>

<div class="navbar max-w-screen-lg justify-between p-3">
    <div class="flex-1">
        <a href="{base}/" class="btn btn-ghost text-xl">James Appleton</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-base">
            <li><a href="{base}/resume/">Resume</a></li>
            <li><a href="{base}/academics/">Academics</a></li>
            <li><a href="{base}/contact/">Contact</a></li>
            <!-- <li><a href="/blog">Blog</a></li> -->
        </ul>
        <div >
            <a href="{base}/" class="btn bg-base-100 btn-ghost">Blog</a>
        </div>
    </div>
</div>
