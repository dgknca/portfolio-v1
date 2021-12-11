<script>
  import { onMount } from 'svelte'
  import { gsap } from 'gsap/dist/gsap.js'
  export let name = ''
  export let href = ''
  export let description = ''
  export let isParticipiant = false

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
  <div bind:this={cont1} class="p-4 md:p-6 w-full">
    {#if isParticipiant}
      <div class="text-gray-900 text-xs h-5 px-1.5 mb-2 inline-flex items-center justify-center border rounded-sm border-gray-900">Participiant</div>
    {/if}
    <h4 class="text-base md:text-lg font-bold">{name}</h4>
    <p class="text-xs mt-2">{description}</p>
  </div>
  <div bind:this={cont2} class="p-4 md:p-6 absolute left-0 top-0 bg-black text-white w-full">
    {#if isParticipiant}
      <div class="text-xs h-5 px-1.5 mb-2 inline-flex items-center justify-center border rounded-sm border-white">Participiant</div>
    {/if}
    <h4 class="text-base md:text-lg font-bold">{name}</h4>
    <p class="text-xs mt-2">{description}</p>
  </div>
</a>
