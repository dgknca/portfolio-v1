<script lang="ts">
  import '../global.postcss'
  import { theme } from './store'
  import { onMount } from 'svelte'
  import MouseFollow from '$lib/MouseFollow.svelte'

  onMount(() => {
    if ($theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  })
</script>

<main>
  <MouseFollow />
  <slot />
</main>
