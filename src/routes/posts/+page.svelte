<script>
  import { config } from "$lib/config";

  export let data;
</script>

<svelte:head>
  <title>{config.siteTitle} – Posts</title>
  <meta property="og:title" content="{config.siteTitle} – Posts" />
  <meta property="og:description" content={config.siteDescription} />
  <meta property="og:url" content="{config.siteURL}/posts" />
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
