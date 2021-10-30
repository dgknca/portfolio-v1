<script lang="ts">
  import MetaTags from "$lib/MetaTags.svelte";
  import {gsap}  from "gsap/dist/gsap";        
  import {ScrollTrigger} from "gsap/dist/ScrollTrigger";    
  import {TextPlugin} from "gsap/dist/TextPlugin";
  import {onMount} from 'svelte'
  import Marquee from "$lib/Marquee.svelte";
  import Link from "$lib/Link.svelte";

  gsap.registerPlugin(TextPlugin, ScrollTrigger);

  onMount(() => {
    gsap.to(".title", {
      duration: 5,
      ease: "none",
      x: "+=500", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
      },
      repeat: -1
    });
  })
</script>

<svelte:head>
  <MetaTags />
</svelte:head>

<div class="py-8">
  <Marquee>doğukan çavuş</Marquee>
  <Marquee scrollDirection={0}><span class="font-normal">front-end</span> developer</Marquee>
  <Marquee><span class="font-normal">ui</span> developer</Marquee>
</div>

<div class="w-1/2 ml-auto mt-10 px-4">
  <h2 class="text-4xl font-syne font-bold">Developer With Designer's Eye</h2>
  <p class="mt-4">
    I am a UI focused front-end developer based in İstanbul, Turkey. I am more of a design-minded front-end developer or <a class="link" href="https://bradfrost.com/blog/post/frontend-design/" target="_blank" rel="nofollow">front-end designers</a>. I like to make the web pixel-perfect.
  </p>

  <ul class="list-disc ml-6 mt-6 leading-8">
    <li>
      <span class="font-bold">Tailwind</span> (with JIT), <span class="font-bold">theme-ui</span>, <span class="font-bold">styled-components</span> or <span class="font-bold">SASS</span> to write CSS.
    </li>
    <li>
      <span class="font-bold">Storybook</span> is essential for a design system.
    </li>
    <li>
      <span class="font-bold">Cross-browser compatible</span> (IE doesn't exist in my world).
    </li>
    <li>
      <span class="font-bold">Fully responsive</span> with mobile-first approach.
    </li>
    <li>
      <span class="font-bold">Vue</span>, <span class="font-bold">Svelte</span>, <span class="font-bold">React</span> or <span class="font-bold">VanillaJS</span>.
    </li>
    <li>
      <span class="font-bold">GSAP</span> to create animations.
    </li>
    <li>
      <span class="font-bold">Figma</span> to design interfaces.
    </li>
  </ul>
</div>
