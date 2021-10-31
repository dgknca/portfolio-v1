<script lang="ts">
  import Logo from '$lib/Logo.svelte'
</script>

<header class="py-4">
  <div class="container flex items-center">
    <a href="/" sveltekit:prefetch>
      <Logo />
    </a>
    <div class="flex-1" />
    <nav class="flex items-center">
      <a href="/hire-me" class="link mx-4 text-sm sm:text-base" sveltekit:prefetch>Hire Me</a>
      <a href="/open-source" class="link mx-4 text-sm sm:text-base" sveltekit:prefetch>Open Source</a>
    </nav>
  </div>
</header>
