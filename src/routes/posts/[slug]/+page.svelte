<script>
  import { page } from "$app/stores";
  import { config } from "$lib/config";

  export let data;

</script>

<svelte:head>
  <title>{config.siteTitle} – {data.title}</title>
  <meta property="og:title" content="{data.title}" />
  <meta property="og:site_name" content="{config.siteTitle}" />
  <meta property="og:description" content="Test description" />
  <meta property="og:url" content={$page.url.href} />
</svelte:head>

<article>
  <h1>{ data.title }</h1>
  <p>Published {data.date}</p>
  <svelte:component this={data.content} />
</article>
