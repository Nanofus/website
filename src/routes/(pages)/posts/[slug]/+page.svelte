<script>
  import { page } from '$app/stores';
  import { config } from '$lib/config';

  export let data;
</script>

<svelte:head>
  <title>{config.siteTitle} – {data.title}</title>
  <meta content={data.title} property="og:title" />
  <meta content={config.siteTitle} property="og:site_name" />
  <meta content="Test description" property="og:description" />
  <meta content={$page.url.href} property="og:url" />
  <meta content="article" property="og:type" />
</svelte:head>

<h1 class="post-title">{data.title}</h1>
<p class="data">{data.date}</p>
{@html data.content}

<style lang="scss">
  .post-title {
    text-align: center;
  }

  .data {
    text-align: center;
    font-size: 0.8rem;
    color: var(--text-light);
  }
</style>
