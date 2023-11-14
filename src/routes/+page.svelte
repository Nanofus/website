<script>
  import { config } from '$lib/config';

  export let data;
</script>

<svelte:head>
  <title>{config.siteTitle}</title>
  <meta content={config.siteTitle} property="og:title" />
  <meta content={config.siteTitle} property="og:site_name" />
  <meta content={config.siteDescription} property="og:description" />
  <meta content={config.siteURL} property="og:url" />
  <meta content="website" property="og:type" />
</svelte:head>

<main>
  <h1 data-animate>{config.siteTitle}</h1>
  <p data-animate style="--stagger:1">I make things.</p>
  <p data-animate style="--stagger:2">
    <a href="/posts">Writing</a> /
    <a href="/projects">Projects</a> /
    <a href="https://www.linkedin.com/in/villetalonpoika/" target="_blank">LinkedIn</a> /
    <a href="https://github.com/Nanofus" target="blank">GitHub</a>
  </p>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 4rem;
    }
  }

  @media only screen and (max-width: 600px) {
  }
</style>
