<script lang="ts">
  // eslint-disable-next-line no-unused-vars
  import { gsap } from 'gsap/dist/gsap.js'
  import { onMount } from 'svelte'

  let ball = null

  onMount(() => {
    gsap.set(ball, { xPercent: -50, yPercent: -50 })
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const mouse = { x: pos.x, y: pos.y }
    const speed = 0.15

    const xSet = gsap.quickSetter(ball, 'x', 'px')
    const ySet = gsap.quickSetter(ball, 'y', 'px')

    window.addEventListener('mousemove', e => {
      mouse.x = e.x
      mouse.y = e.y
    })

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio())

      pos.x += (mouse.x - pos.x) * dt
      pos.y += (mouse.y - pos.y) * dt
      xSet(pos.x)
      ySet(pos.y)
    })
  })
</script>

<div
  class="ball pointer-events-none border border-black rounded-full fixed w-12 h-12"
  bind:this={ball}
/>

<style lang="postcss">
</style>
