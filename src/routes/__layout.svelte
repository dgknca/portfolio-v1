<script lang="ts">
  import '../global.postcss'
  import MetaTags from '$lib/MetaTags.svelte'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<svelte:head>
  <MetaTags />
</svelte:head>

<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex-1">
    <slot />
  </main>
  <Footer/>
</div>
