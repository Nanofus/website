<script>
  import { preloadCode } from "$app/navigation";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "$lib/styles/style.scss";
  import "$lib/styles/prism-atom-dark.css";
  import { fade, fly } from "svelte/transition";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  export let data;
  export let el;

  $: if (browser) {
    preloadCode("/posts", "/posts/*");
  }
</script>

<Header />

{#key data.currentRoute}
  <main in:fly="{{ y: 10, duration: 120, delay: 120 }}" out:fade="{{duration: 120}}">
    <slot />
  </main>
{/key}

<Footer />
