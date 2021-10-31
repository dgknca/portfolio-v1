<script lang="ts">
  import Marquee from '$lib/Marquee.svelte'
  import FiverrCard from '$lib/FiverrCard.svelte'
</script>

<div class="py-8">
  <Marquee repeat={6}>hire me</Marquee>
</div>

<div class="container md:flex py-5 md:py-10 mt-3">
  <div class="md:w-1/2 px-4 flex items-center justify-center">
    <h2 class="text-4xl md:text-6xl font-syne font-bold text-center md:text-left">
      Let's start your project
    </h2>
  </div>
  <div class="md:w-1/2 px-4 mt-5 md:mt-0">
    <p class="mt-3">
      Feel free to contact me for exciting opportunities or freelance projects of all shapes and
      sizes. Get in touch and let's see if I can be of service to you. I will be happy to answer any
      questions you may have. I try to respond within 2 days.

      <br />
      <br />

      <a href="mailto:dgknca@gmail.com" class="text-lg md:text-xl font-syne font-bold link"
        >dgknca@gmail.com</a
      >
      <!-- I always make sure the projects is developed with the latest technology and it is easy to use or
      maintained by the clients. -->
    </p>
  </div>
</div>

<div class="container py-5 md:py-10 mt-3">
  <h2 class="text-4xl md:text-6xl font-syne font-bold text-center">Services</h2>
  <div class="md:flex mt-2 md:mt-5">
    <div class="md:w-6/12 flex items-center justify-center p-4">
      <h2 class="font-syne font-bold text-xl md:text-2xl">Fiverr</h2>
    </div>
    <div class="md:w-6/12 p-4">
      <FiverrCard
        name="Design to Pixel Perfect Coding"
        href="https://www.fiverr.com/dgknca/code-your-designs-pixel-perfect"
      />
      <FiverrCard
        name="Landing Page Coding"
        href="https://www.fiverr.com/dgknca/code-your-landing-page-design"
      />
    </div>
  </div>
</div>
