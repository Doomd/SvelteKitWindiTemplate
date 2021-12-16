<script>
import 'virtual:windi.css'
import Link from '$lib/components/Link.svelte'
import Footer from '$lib/components/Footer.svelte'
</script>

<page class="flex flex-col min-h-screen">
  <header class="flex p-4 justify-between bgAccent dark:bgAccentDark">
    <h1 class="text-xl text-blue-500">Site Name</h1>
    <nav>
      <Link path={'/'} name="Home" />
      <Link path={'/about'} name="About" />
      <Link path={'/settings'} name="Settings" />
    </nav>
  </header>

  <main class="bg-gray-100 flex-1 p-4 dark:bg-gray-900">
    <slot />
  </main>

  <footer class="flex p-4 justify-center bgAccent dark:bgAccentDark"><Footer /></footer>
</page>

<style global>
body {
  margin: 0;
  min-height: 100vh;
}

.bgAccent {
  @apply bg-gray-300;
}
.bgAccentDark {
  @apply bg-gray-700;
}
</style>
