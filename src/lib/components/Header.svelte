<script lang="ts">
import Link from '$lib/components/Link.svelte'
import Title from '$lib/components/Title.svelte'
import { site } from '$lib/config/site'
</script>

<div class="text-3xl">{site.name}</div>
<nav>
  {#each site.links as link}
    <Link path={link.path} name={link.name} />
  {/each}
</nav>
