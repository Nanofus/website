<script>
    import {page} from '$app/stores';
    import {config} from '$lib/config';

    export let data;
</script>

<svelte:head>
    <title>{config.siteTitle} – {data.metadata.title}</title>
    <meta content={data.metadata.title} property="og:title"/>
    <meta content={config.siteTitle} property="og:site_name"/>
    <meta content="Test description" property="og:description"/>
    <meta content={$page.url.href} property="og:url"/>
    <meta content="article" property="og:type"/>
</svelte:head>

<h1 class="post-title">{data.metadata.title}</h1>
<div class="metadata">
    <p class="date">{data.metadata.date}</p>
    <p class="tags">
        {#each data.metadata.tags as tag}
            <a href="/tags/{tag}" class="data">{tag}</a>
        {/each}
    </p>
</div>
{@html data.content}

<style lang="scss">
  .post-title {
    text-align: center;
  }

  .metadata {
    text-align: center;
    font-size: 0.8rem;
    color: var(--text-light);
  }

  .tags a {
    &::before {
      content: '#';
    }
    color: var(--text-light);
    margin: 0 0.5rem;
  }
</style>
