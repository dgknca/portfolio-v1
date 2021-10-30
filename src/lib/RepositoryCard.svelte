<script>
  export let name = ''
  export let href = ''
  export let description = ''
</script>

<a class="block p-6 border-b border-gray-200 last:border-none" {href} target="_blank" rel="nofollow">
  <h4 class="text-lg font-bold">{name}</h4>
  <p class="text-xs mt-2">{description}</p>
</a>
