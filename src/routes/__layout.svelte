<script lang="ts">
  import '../global.postcss'
  import MetaTags from '$lib/MetaTags.svelte'
  import { theme } from './store'
  import { onMount } from 'svelte'
  import MouseFollow from '$lib/MouseFollow.svelte'

  onMount(() => {
    if ($theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  })
</script>

<svelte:head>
  <MetaTags />
</svelte:head>

<main>
  <MouseFollow />
  <slot />
</main>
