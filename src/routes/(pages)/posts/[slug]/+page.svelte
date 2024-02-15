<script>
  import { page } from '$app/stores';
  import { config } from '$lib/config';

  export let data;
</script>

<svelte:head>
  <title>{config.siteTitle} – {data.metadata.title}</title>
  <meta content={data.metadata.title} property="og:title" />
  <meta content={config.siteTitle} property="og:site_name" />
  <meta content={config.siteDescription} property="og:description" />
  <meta content={$page.url.href} property="og:url" />
  <meta content="article" property="og:type" />
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
<div class="metadata">
  <p class="updated">updated {data.metadata.updated.join(', ')}</p>
</div>
<div class="fleuron">
  <span>❦</span>
</div>

<style lang="scss">
  .post-title {
    text-align: center;
  }

  .metadata {
    font-size: 0.8rem;
    color: var(--text-light-dim);
    display: flex;
    flex-wrap: wrap;

    > p {
      margin: 0 0 0.5rem 0;

      &:not(:last-child) {
        &::after {
          margin: 0 0.5rem 0 0.5rem;
          content: '/';
        }
      }
    }
  }

  .tags a {
    &::before {
      content: '#';
    }

    &:not(:last-child) {
      &::after {
        content: ' ';
      }
    }

    color: var(--text-light-dim);

    &:hover {
      color: var(--link-hover-light);
    }
  }

  .fleuron {
    user-select: none;
    text-align: center;
    margin: 2rem 0;

    span {
      font-size: 1.5rem;
      color: var(--text-light-dim);
    }
  }

  @media (prefers-color-scheme: dark) {
    .fleuron {
      span {
        color: var(--text-dark-dim);
      }
    }
    .metadata {
      color: var(--text-dark-dim);
    }
    .tags a {
      color: var(--text-dark-dim);

      &:hover {
        color: var(--link-hover-dark);
      }
    }
  }
</style>
