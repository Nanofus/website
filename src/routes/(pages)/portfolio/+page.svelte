<script>
  import { config } from '$lib/config';
</script>

<svelte:head>
  <title>{config.siteTitle} – Portfolio</title>
  <meta content="Projects" property="og:title" />
  <meta content={config.siteTitle} property="og:site_name" />
  <meta content={config.siteDescription} property="og:description" />
  <meta content="{config.siteURL}/portfolio" property="og:url" />
  <meta content="website" property="og:type" />
</svelte:head>

<h1 data-animate>My things</h1>
<ul>
  <li data-animate style="--stagger:1">
    <a href="https://store.steampowered.com/app/1570490/Perikoto/" target="blank">Perikoto</a>
    <div>A virtual reality adventure game for SteamVR devices</div>
  </li>
  <li data-animate style="--stagger:2">
    <a href="https://ikuturso.fi" target="blank">Ikuturso</a>
    <div>I make video games with a business name from Kalevala</div>
  </li>
  <li data-animate style="--stagger:3">
    <a href="https://github.com/Nanofus/nuva" target="_blank">Nuva</a>
    <div>SvelteKit-based frontend for WordPress, tailored for interactive fiction</div>
  </li>
  <li data-animate style="--stagger:4">
    <a href="https://github.com/Nanofus/novel.js" target="_blank">Novel.js</a>
    <div>A text adventure engine for the web</div>
  </li>
</ul>
