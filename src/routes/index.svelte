<script lang="ts">
  import { gsap } from 'gsap/dist/gsap.js'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
  import { onMount } from 'svelte'
  import Marquee from '$lib/Marquee.svelte'

  gsap.registerPlugin(ScrollTrigger)

  onMount(() => {
    gsap.to('.title', {
      duration: 5,
      ease: 'none',
      x: '+=500', //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
      },
      repeat: -1
    })
  })
</script>

<div class="py-8">
  <Marquee>doğukan çavuş</Marquee>
  <Marquee scrollDirection={0}><span class="font-normal">front-end</span> developer</Marquee>
  <Marquee><span class="font-normal">ui</span> developer</Marquee>
</div>

<div class="container md:flex py-10 mt-3">
  <div class="md:w-1/2 px-4 flex items-center justify-center">
    <h2 class="text-6xl font-syne font-bold text-center">about</h2>
  </div>
  <div class="md:w-1/2 px-4 mt-5 md:mt-0">
    <h2 class="text-xl font-syne font-bold">Developer With Designer's Eye</h2>
    <p class="mt-3">
      A UI focused front-end developer based in Istanbul, Turkey. More of a design-minded front-end
      developer or <a
        class="link-inline"
        href="https://bradfrost.com/blog/post/frontend-design/"
        target="_blank"
        rel="nofollow">front-end designers</a
      >. I like to make the web pixel-perfect.
    </p>

    <ul class="list-disc ml-6 mt-6 leading-8">
      <li>
        <span class="font-bold">Tailwind</span> (with JIT), <span class="font-bold">theme-ui</span>,
        <span class="font-bold">styled-components</span>
        or <span class="font-bold">SASS</span> to write CSS.
      </li>
      <li>
        <span class="font-bold">Cross-browser compatible</span> (IE doesn't exist in my world).
      </li>
      <li>
        <span class="font-bold">Fully responsive</span> with mobile-first approach.
      </li>
      <li>
        <span class="font-bold">Vue</span>, <span class="font-bold">Svelte</span>,
        <span class="font-bold">React</span>
        or <span class="font-bold">VanillaJS</span>.
      </li>
      <li>
        <span class="font-bold">Gridsome</span>, <span class="font-bold">Nuxt</span>,
        <span class="font-bold">Sveltekit</span>
        or <span class="font-bold">Next</span> for JAMStack.
      </li>
      <li>
        <span class="font-bold">Storybook</span>
      </li>
      <li>
        <span class="font-bold">GSAP</span> to animate.
      </li>
      <li>
        <span class="font-bold">Figma</span> to design interfaces.
      </li>
    </ul>
  </div>
</div>
