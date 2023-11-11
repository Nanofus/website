<script>
  import { config } from '$lib/config';

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

<h1>Blog</h1>

<ul>
  {#each data.posts as post}
    <li>
      <a href={post.path}>
        {post.meta.title}
      </a>
      {post.meta.date}
    </li>
  {/each}
</ul>
