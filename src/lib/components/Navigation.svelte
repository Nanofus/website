<script>
  import { config } from '$lib/config';
</script>

<nav data-animate>
  <h1>
    <a href="/">{config.siteTitle}</a>
  </h1>
  <ul>
    <li><a href="/posts">Writing</a></li>
    <li><a href="/portfolio">Portfolio</a></li>
  </ul>
</nav>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: var(--navigation-font-size);
  }

  ul {
    display: flex;
    list-style: none;

    li {
      list-style-type: none;
    }
  }

  a {
    color: var(--text-light);
    padding: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    a {
      color: var(--text-dark);
    }
  }

  @media only screen and (max-width: 600px) {
    h1 > a {
      padding-left: 0;
    }
  }
</style>
