<script>
  import { config } from '$lib/config';
  import Header from '$lib/components/Header.svelte';

  export let data;
</script>

<svelte:head>
  <title>{config.siteTitle} – Posts</title>
  <meta property="og:title" content="Posts" />
  <meta property="og:site_name" content={config.siteTitle} />
  <meta property="og:description" content={config.siteDescription} />
  <meta property="og:url" content="{config.siteURL}/posts" />
  <meta property="og:type" content="website" />
</svelte:head>

<Header />

<h1>Blog</h1>

<article>
  <ul>
    {#each data.posts as post}
      <li>
        <a href={post.path}>
          {post.metadata.title}
        </a>
        {post.metadata.date}
      </li>
    {/each}
  </ul>
</article>
