<script lang="ts">
  import Logo from '$lib/Logo.svelte'
</script>

<header class="py-3">
  <div class="container flex items-center">
    <a href="/" sveltekit:prefetch>
      <Logo />
    </a>
    <div class="flex-1" />
    <nav class="flex items-center">
      <a href="/open-source" class="link" sveltekit:prefetch>Open Source</a>
    </nav>
  </div>
</header>
