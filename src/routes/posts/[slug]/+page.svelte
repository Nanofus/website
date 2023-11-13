<script>
  import { page } from '$app/stores';
  import { config } from '$lib/config';
  import Header from '$lib/components/Header.svelte';

  export let data;
</script>

<svelte:head>
  <title>{config.siteTitle} – {data.title}</title>
  <meta property="og:title" content={data.title} />
  <meta property="og:site_name" content={config.siteTitle} />
  <meta property="og:description" content="Test description" />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:type" content="article" />
</svelte:head>

<Header />
<article>
  <h1>{data.title}</h1>
  <p class="data">{data.date}</p>
  {@html data.content}
</article>
