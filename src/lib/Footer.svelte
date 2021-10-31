<script lang="ts">
  import Logo from '$lib/Logo.svelte'
</script>

<footer class="mt-6 border-t border-gray-400">
  <div class="container flex items-center py-6">
    <ul class="flex">
      <li class="font-syne text-sm font-bold px-3">
        <a
          class="link"
          href="https://stackoverflow.com/users/10698741/do%c4%9fukan?tab=profile"
          target="_blank"
          rel="nofollow"
        >
          Stackoverflow
        </a>
      </li>
      <li class="font-syne text-sm font-bold px-3">
        <a class="link" href="https://github.com/dgknca" target="_blank" rel="nofollow"> Github </a>
      </li>
      <li class="font-syne text-sm font-bold px-3">
        <a class="link" href="https://codepen.io/dgknca" target="_blank" rel="nofollow">
          Codepen
        </a>
      </li>
      <li class="font-syne text-sm font-bold px-3">
        <a
          class="link"
          href="https://www.linkedin.com/in/dogukancavus/"
          target="_blank"
          rel="nofollow"
        >
          Linkedin
        </a>
      </li>
    </ul>
    <div class="flex-1" />
    <a href="/" sveltekit:prefetch>
      <Logo />
    </a>
  </div>
</footer>
