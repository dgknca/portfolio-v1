<script lang="ts">
  import Logo from '$lib/Logo.svelte'
</script>

<header class="py-4">
  <div class="container flex items-center">
    <a href="/" sveltekit:prefetch>
      <Logo />
    </a>
    <div class="flex-1" />
    <nav>
      <ul class="flex items-center">
        <li class="mx-4">
          <a href="/hire-me" class="link text-sm sm:text-base" sveltekit:prefetch>Hire Me</a>
        </li>
        <li class="mx-4">
          <a href="/open-source" class="link text-sm sm:text-base" sveltekit:prefetch
          >Open Source</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
