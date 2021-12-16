<script>
export let path = null
export let name = 'Link'
export let type = 'header'
</script>

{#if type == 'header'}
  <a class="rounded font-bold m-2 p-2" href={path ? path : null}>{name}</a>
{/if}

<style lang="postcss">
a {
  background: var(--highlight-color);
  color: white;
}
a:hover {
  color: var(--highlight-color);
  background: white;
}
</style>
