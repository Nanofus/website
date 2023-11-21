<script>
  import { config } from '$lib/config';

  export let data;
</script>

<svelte:head>
  <title>{config.siteTitle} – Writing</title>
  <meta content="Writing" property="og:title" />
  <meta content={config.siteTitle} property="og:site_name" />
  <meta content={config.siteDescription} property="og:description" />
  <meta content="{config.siteURL}/posts" property="og:url" />
  <meta content="website" property="og:type" />
</svelte:head>

<h1 data-animate>My writings</h1>
<ul>
  {#each data.posts as post, i}
    <li data-animate style="--stagger:{i+1}">
      <a href={post.path}>
        {post.metadata.title}
      </a>
      {post.metadata.date}
    </li>
  {/each}
</ul>
