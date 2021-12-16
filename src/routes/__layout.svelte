<script>
import 'virtual:windi.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
</script>

<page class="flex flex-col min-h-screen">
  <header class="flex p-4 justify-between items-center bgAccent dark:bgAccentDark">
    <Header />
  </header>

  <main class="bg-gray-100 flex-1 p-4 dark:bg-gray-900">
    <slot />
  </main>

  <footer class="flex p-4 justify-center bgAccent dark:bgAccentDark">
    <Footer />
  </footer>
</page>

<style global lang="postcss">
:root {
  --highlight-color: #1ec0f1;
}
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
main a {
  border-bottom: 2px solid var(--highlight-color);
}
main a:hover {
  border-bottom: transparent;
  background: var(--highlight-color);
}
</style>
