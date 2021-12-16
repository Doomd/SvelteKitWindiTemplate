<script lang="ts">
import { site } from '$lib/config/site'
$: prettyDate = new Date(site.versionTS).toISOString()
</script>

<div>
  <a href={site.packageLink} class="hover:(bg-black text-white transition-all) ">
    {site.packageName} v{site.version} (released {prettyDate})
  </a>
</div>
