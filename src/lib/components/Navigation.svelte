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
    padding: 1rem 1rem;
  }

  h1 {
    font-size: var(--navigation-font-size);
  }

  ul {
    display: flex;
    list-style: none;

    li {
      list-style-type: none;
      margin: 1rem;
    }
  }

  a {
    color: var(--text-light);
  }

  @media (prefers-color-scheme: dark) {
    a {
      color: var(--text-dark);
    }
  }
</style>
