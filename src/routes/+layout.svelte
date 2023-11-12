<script>
  import { preloadCode } from '$app/navigation';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/style.scss';
  import '$lib/styles/code.scss';
  import { fade, fly } from 'svelte/transition';
  import { browser } from '$app/environment';

  export let data;
  $: if (browser) {
      preloadCode('/posts', '/posts/*');
  }
</script>

{#key data.currentRoute}
  <main in:fly={{ y: 10, duration: 120, delay: 120 }} out:fade={{ duration: 120 }}>
    <slot />
  </main>
{/key}

<Footer />
