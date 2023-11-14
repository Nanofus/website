<script>
  import { preloadCode } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/style.scss';
  import '$lib/styles/code.scss';
  import { browser } from '$app/environment';

  $: if (browser) {
    preloadCode('/projects', '/posts', '/posts/*');
  }
</script>

<slot />

<Footer />
