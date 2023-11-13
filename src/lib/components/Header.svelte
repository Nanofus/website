<script>
  import { config } from '$lib/config';

  export let front = false;
</script>

<header id={front ? 'main-header' : ''}>
  {#if front}
    <h1 data-animate>{config.siteTitle}</h1>
  {:else}
    <h1>
      <a href="/">{config.siteTitle}</a>
    </h1>
  {/if}
</header>
