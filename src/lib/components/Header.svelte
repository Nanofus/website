<script>
  import { config } from '$lib/config';
  
  export let front = false;
</script>

<header id={front ? "main-header" : ""}>
  <h1><a href="/">{config.siteTitle}</a></h1>
</header>
