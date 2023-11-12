<script>
    import {config} from '$lib/config';
    import Header from "$lib/components/Header.svelte";

    export let data;
</script>

<svelte:head>
  <title>{config.siteTitle}</title>
  <meta property="og:title" content={config.siteTitle}/>
  <meta property="og:site_name" content={config.siteTitle}/>
  <meta property="og:description" content={config.siteDescription}/>
  <meta property="og:url" content={config.siteURL}/>
  <meta property="og:type" content="website"/>
</svelte:head>

<Header front={true} />
<div id="front-page">
  <p data-animate style="--stagger:1">I make things.</p>

  <h2 title="Projects" data-animate style="--stagger:2">My things</h2>
  <ul data-animate style="--stagger:2">
    <li>
      <a href="https://store.steampowered.com/app/1570490/Perikoto/" target="blank">Perikoto</a>
      <div class="mouseover">A virtual reality adventure game for SteamVR devices</div>
    </li>
    <li>
      <a href="https://ikuturso.fi" target="blank">Ikuturso</a>
      <div class="mouseover">I make video games with a business name from Kalevala</div>
    </li>
    <li>
      <a href="https://github.com/Nanofus/nuva" target="_blank">Nuva</a>
      <div class="mouseover">SvelteKit-based frontend for WordPress, tailored for interactive fiction</div>
    </li>
    <li>
      <a href="https://github.com/Nanofus/novel.js" target="_blank">Novel.js</a>
      <div class="mouseover">A text adventure engine for the web</div>
    </li>
  </ul>

  <h2 title="Posts" data-animate style="--stagger:3">Posts</h2>
  <ul data-animate style="--stagger:3">
    {#each data.posts as post}
      <li>
        <a href={post.path}>
          {post.meta.title}
        </a>
        {post.meta.date}
      </li>
    {/each}
  </ul>

  <h2 title="Social media" data-animate style="--stagger:4">Me elsewhere</h2>
  <ul data-animate style="--stagger:4">
    <li>
      <a href="https://www.linkedin.com/in/villetalonpoika/" target="_blank">LinkedIn</a>
    </li>
    <li><a href="https://github.com/Nanofus" target="blank">GitHub</a></li>
  </ul>
</div>