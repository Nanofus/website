<script>
  import { config } from '$lib/config';
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
  <p data-animate style="--stagger:1">
    Developer and consultant, running a gaming startup on the side.
  </p>
  <p data-animate style="--stagger:2" class="link-list">
    <span class="link">
      <a href="/posts">Writing</a>
    </span>
    <span class="link">
      <a href="/portfolio">Portfolio</a>
    </span>
    <span class="link">
      <a href="https://www.linkedin.com/in/villetalonpoika/" target="_blank">LinkedIn</a>
    </span>
    <span class="link">
      <a href="https://github.com/Nanofus" target="blank">GitHub</a>
    </span>
  </p>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 4rem;
      margin-bottom: 0;
    }

    a {
      color: var(--text-light);
    }

    .link-list {
      display: flex;
      flex-direction: row;

      :not(:last-child) {
        &::after {
          content: '/';
          margin: 0 0.5rem;
        }
      }
    }

    @media (prefers-color-scheme: dark) {
      a {
        color: var(--text-dark);
      }
    }
  }

  @media only screen and (max-width: 600px) {
  }
</style>
