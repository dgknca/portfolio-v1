<script>
  import { onMount } from 'svelte'
  import { gsap } from 'gsap/dist/gsap'
  export let name = ''
  export let href = ''
  export let description = ''

  let cont1 = null
  let cont2 = null

  const DURATION = 0.6
  const EASE = 'power4'

  onMount(() => {
    gsap.set(cont2, { y: '110%' })
  })

  const handleMouseenter = () => {
    gsap.to(cont1, {
      y: '-110%',
      ease: EASE,
      duration: DURATION
    })
    gsap.to(cont2, {
      y: '-0%',
      ease: EASE,
      duration: DURATION
    })
  }

  const handleMouseleave = () => {
    gsap.to(cont1, {
      y: '0%',
      ease: EASE,
      duration: DURATION
    })
    gsap.to(cont2, {
      y: '110%',
      ease: EASE,
      duration: DURATION
    })
  }
</script>

<a
  class="block border-b border-gray-200 last:border-none relative overflow-hidden"
  {href}
  target="_blank"
  rel="nofollow"
  on:mouseenter={handleMouseenter}
  on:mouseleave={handleMouseleave}
>
  <div bind:this={cont1} class="p-6 w-full">
    <h4 class="text-lg font-bold">{name}</h4>
    <p class="text-xs mt-2">{description}</p>
  </div>
  <div bind:this={cont2} class="p-6 absolute left-0 top-0 bg-black text-white w-full">
    <h4 class="text-lg font-bold">{name}</h4>
    <p class="text-xs mt-2">{description}</p>
  </div>
</a>
