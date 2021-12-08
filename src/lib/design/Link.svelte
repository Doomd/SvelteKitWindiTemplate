<script>
export let path = null
export let name = 'Link'
</script>

<a class="m-0 p-2 text-white bg-blue-500 hover:bg-yellow-500" href={path ? path : null}>{name}</a>
