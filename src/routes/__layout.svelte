<script lang="ts">
  import '../global.postcss'
  import MetaTags from '$lib/MetaTags.svelte'
  import Header from '$lib/Header.svelte'
</script>

<svelte:head>
  <MetaTags />
</svelte:head>

<Header />
<main>
  <slot />
</main>
