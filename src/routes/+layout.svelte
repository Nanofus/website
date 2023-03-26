<script>
  import { preloadCode } from "$app/navigation";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "$lib/styles/style.scss";
  import "$lib/styles/prism-atom-dark.css";
  import { fade } from "svelte/transition";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  export let data;
  export let el;

  onMount(() => {
    el.querySelectorAll("h2").forEach((h2) => {
      //console.log(h2);
    });
  })

  $: if (browser) {
    preloadCode("/posts", "/posts/*");
  }
</script>

<Header />

{#key data.currentRoute}
  <main bind:this={el} in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}

<Footer />
