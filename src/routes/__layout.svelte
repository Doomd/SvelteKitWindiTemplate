<script>
import 'virtual:windi.css'
import Link from '$lib/design/Link.svelte'
</script>

<page class="flex flex-col min-h-screen">
  <header class="flex justify-between p-4">
    <h1 class="text-xl text-blue-500">Site Name</h1>
    <nav>
      <Link path={'/'} name="Home" />
      <Link path={'/about'} name="About" />
      <Link path={'/settings'} name="Settings" />
    </nav>
  </header>

  <main class="p-4 flex-1">
    <slot />
  </main>

  <footer>Footer</footer>
</page>

<style global>
body {
  margin: 0;
  min-height: 100vh;
}
</style>
