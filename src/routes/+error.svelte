<script>
  import { config } from '$lib/config';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{config.siteTitle} – {$page.status}</title>
  <meta property="og:title" content={$page.status.toString()} />
</svelte:head>

<h1>{$page.status}: {$page.error?.message}</h1>
