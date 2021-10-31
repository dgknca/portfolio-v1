<script>
  import { onMount } from 'svelte'
  import { gsap } from 'gsap/dist/gsap.js'
  export let name = ''
  export let href = ''

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
  <div bind:this={cont1} class="p-6 w-full flex items-center justify-between">
    <h4 class="text-lg font-bold mr-4">{name}</h4>
    <svg class="flex-shrink-0" width="40" height="40" viewBox="0 0 30 28"><path d="M27.824 14.588L15.648 27.145l.777.855L30 14 16.425 0l-.777.855 12.176 12.557H0v1.176z"></path></svg>
  </div>
  <div bind:this={cont2} class="p-6 absolute left-0 top-0 bg-black text-white w-full flex items-center justify-between">
    <h4 class="text-lg font-bold mr-4">{name}</h4>
    <svg class="flex-shrink-0" width="40" height="40" viewBox="0 0 30 28" fill="#fff"><path d="M27.824 14.588L15.648 27.145l.777.855L30 14 16.425 0l-.777.855 12.176 12.557H0v1.176z"></path></svg>
  </div>
</a>
