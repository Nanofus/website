<script>
  import '$lib/styles/style.scss';
  import '$lib/styles/code.scss';
  import { blur, fly } from 'svelte/transition';
  import Navigation from '$lib/components/Navigation.svelte';

  export let data;
</script>

<Navigation />
{#key data.currentRoute}
  <article in:fly={{ y: 10, duration: 120, delay: 120 }} out:blur={{ duration: 120 }}>
    <slot />
  </article>
{/key}

<style lang="scss">
  article {
    margin: 3rem auto;
    max-width: var(--content-width);
  }
</style>
