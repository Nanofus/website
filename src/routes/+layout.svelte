<script lang="ts">
  import { preloadCode } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/style.scss';
  import '$lib/styles/code.scss';
  import { browser } from '$app/environment';
  import { darkMode } from '$lib/stores';

  let lightBackground: string, darkBackground: string;

  $: if (browser) {
    preloadCode('/projects', '/posts', '/posts/*');
    lightBackground = getComputedStyle(document.body).getPropertyValue('--background-light');
    darkBackground = getComputedStyle(document.body).getPropertyValue('--background-dark');
  }
</script>

<svelte:head>
  <meta name="theme-color" content={$darkMode ? darkBackground : lightBackground} />
</svelte:head>

<slot />

<Footer />
