<script>
  export let data;
  console.log(data);
</script>

<article>
  <h1>{ data.title }</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>

{#if data.categories?.length}
  <aside>
    <h2>Posted in:</h2>
    <ul>
      {#each data.categories as category}
        <li>
          <a href='/blog/category/{category}'>
            {category}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}
