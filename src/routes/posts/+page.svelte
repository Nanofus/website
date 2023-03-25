<script>
  import { config } from "$lib/config";

  export let data;
</script>

<svelte:head>
  <title>{config.siteTitle} – Posts</title>
  <meta property="og:title" content="Posts" />
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
