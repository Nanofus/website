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

  onMount(() => {
    el.querySelectorAll("h2").forEach((h2) => {
      //console.log(h2);
    });
  });

  $: if (browser) {
    preloadCode("/posts", "/posts/*");
  }
</script>

<Header />

{#key data.currentRoute}
  <main bind:this={el} in:fly="{{ y: 100, duration: 500, delay: 200 }}" out:fade="{{duration: 200}}">
    <slot />
  </main>
{/key}

<Footer />
