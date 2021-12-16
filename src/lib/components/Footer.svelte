<script lang="ts">
import { version, versionTS, packageName } from '$lib/config/version'
$: prettyDate = new Date(versionTS).toISOString()
</script>

<div>
  {packageName} v{version} (released {prettyDate})
</div>
