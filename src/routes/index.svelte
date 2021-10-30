<script lang="ts">
  import MetaTags from "$lib/MetaTags.svelte";
  import {gsap}  from "gsap/dist/gsap";        
  import {ScrollTrigger} from "gsap/dist/ScrollTrigger";    
  import {TextPlugin} from "gsap/dist/TextPlugin";
  import {onMount} from 'svelte'
  import Marquee from "$lib/Marquee.svelte";

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

<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<Marquee><span class="font-normal">doğukan</span> çavuş</Marquee>
<Marquee scrollDirection={0}><span class="font-normal">frontend</span> developer</Marquee>
<Marquee><span class="font-normal">ui</span> developer</Marquee>

<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>
<div class="bg-red-300 w-72 h-72"></div>

<style lang="postcss">
</style>
