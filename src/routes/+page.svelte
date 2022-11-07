<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h3>Auth methods</h3>
<ul>
    {#if data.usernamePassword}
        <li>Username/Password</li>
    {/if}
    {#if data.emailPassword}
        <li>Email/Password</li>
    {/if}
</ul>