<script>
  import { config } from "$lib/config";

  export let data;
</script>

<svelte:head>
  <title>{config.siteTitle}</title>
  <meta property="og:title" content={config.siteTitle} />
</svelte:head>

<p>I make things.</p>

<h2 title="Projects">My things</h2>
<ul>
  <li>
    <a href="https://perikoto.com" target="blank">Perikoto</a>
    <div class="mouseover">A virtual reality adventure game for SteamVR devices</div>
  </li>
  <li>
    <a href="https://ikuturso.fi" target="blank">Ikuturso</a>
    <div class="mouseover">I make video games with a business name from Kalevala</div>
  </li>
  <li>
    <a href="https://github.com/Nanofus/novel.js" target="_blank">Novel.js</a>
    <div class="mouseover">A text adventure engine for the web</div>
  </li>
</ul>

<h2 title="Posts">Posts</h2>
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

<h2 title="Social media">Me elsewhere</h2>
<ul>
  <li>
    <a href="https://www.linkedin.com/in/villetalonpoika/" target="_blank">LinkedIn</a>
  </li>
  <li><a href="https://github.com/Nanofus" target="blank">GitHub</a></li>
</ul>
