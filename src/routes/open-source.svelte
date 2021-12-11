<script lang="ts">
  import Marquee from '$lib/Marquee.svelte'
  import RepositoryCard from '$lib/RepositoryCard.svelte'
</script>

<div class="py-8">
  <Marquee>open source projects</Marquee>
</div>

<div class="container py-5 md:py-10 mt-3">
  <div class="md:flex mt-4 md:mt-0">
    <div class="md:w-6/12 flex items-center justify-center px-4 md:py-4">
      <h2 class="font-syne font-bold text-2xl">CSS</h2>
    </div>
    <div class="md:w-6/12 px-4 md:py-4 mt-2">
      <RepositoryCard
        name="css-skeletons"
        href="https://github.com/dgknca/css-skeletons"
        description="A single div, dynamic, fully customizable pure CSS skeletons library."
      />
      <RepositoryCard
        name="line.css"
        href="https://github.com/dgknca/line.css"
        description="A simple CSS library provides useful elements & components."
      />
    </div>
  </div>

   <div class="md:flex mt-4 md:mt-0">
    <div class="md:w-6/12 flex items-center justify-center px-4 md:py-4">
      <h2 class="font-syne font-bold text-2xl">tailwindcss</h2>
    </div>
    <div class="md:w-6/12 px-4 md:py-4 mt-2">
      <RepositoryCard
        name="tailwindcss-container-query"
        href="https://github.com/dgknca/tailwindcss-container-query"
        description="A plugin that provides CSS Container Queries for tailwindcss."
      />
    </div>
  </div>

  <div class="md:flex mt-4 md:mt-0">
    <div class="md:w-6/12 flex items-center justify-center px-4 md:py-4">
      <h2 class="font-syne font-bold text-2xl">Javascript</h2>
    </div>
    <div class="md:w-6/12 px-4 md:py-4 mt-2">
      <RepositoryCard
        name="simple-notify"
        href="https://github.com/simple-notify/simple-notify"
        description="Pure javascript toast notifications."
      />
      <RepositoryCard
        name="pincode-input"
        href="https://github.com/dgknca/pincode-input"
        description="Pure javascript pincode input component."
      />
    </div>
  </div>

  <div class="md:flex mt-4 md:mt-0">
    <div class="md:w-6/12 flex items-center justify-center px-4 md:py-4">
      <h2 class="font-syne font-bold text-2xl">Vue</h2>
    </div>
    <div class="md:w-6/12 px-4 md:py-4 mt-2">
      <RepositoryCard
        name="vue-multi-split-pane"
        href="https://github.com/dgknca/vue-multi-split-pane"
        description="A component based on Vue.js. Provides unlimited resizable pane support. Like in codepen.io"
      />
      <RepositoryCard
        name="v-collapse-it"
        href="https://github.com/dgknca/v-collapse-it"
        description="A super simple Vue 3 directive to expand/collapse elements."
      />
      <RepositoryCard name="vue3-tree" href="https://github.com/teamseodo/vue3-tree" description="A tree library for Vue 3" isParticipiant />
    </div>
  </div>
</div>
