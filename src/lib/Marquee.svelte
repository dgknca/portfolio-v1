<script lang="ts">
  // eslint-disable-next-line no-unused-vars
  import { gsap, TweenLite, Linear, Power3, TimelineLite } from 'gsap/dist/gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
  gsap.registerPlugin(ScrollTrigger)
  import { onMount } from 'svelte';

  export let text = '';
  export let scrollDirection: 0 | 1 = 1;
  export let speed = 160;

  let boxWidth = null;
  let totalWidth = null;
  let no01 = null;
  let currentDir = null;
  let dirFromLeft = null;
  let dirFromRight = null;
  let mod = null;
  let animation = null;
  let scrollAnimation = new TimelineLite();
  let resize = null;
  let previousWinWidth = null;
  let lastScrollDir = 'down';
  let lastScrollTop = null;
  let boxCount = 4;

  // refs
  let wrapperEl = null;
  let marqueeEl = null;
  let boxEl = null;
  let boxesEl = null;

  onMount(() => {
    ScrollTrigger.defaults({
      toggleActions: 'restart pause resume pause'
    })
    setTimeout(function() {
      wrapperEl.classList.remove('opacity-0')
      scrollAnimation.from(
        marqueeEl,
        {
          scrollTrigger: {
            trigger: marqueeEl,
            start: '-300% center',
            scrub: 1
          },
          x: '-=200',
          ease: Power3.easeOut,
          alpha: 0,
          duration: 3
        },
        0
      )
    }, 1500)

    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll)
    previousWinWidth = window.innerWidth
    setMarquee()
    animateMarquee(scrollDirection === 1 ? 'left' : 'right')
  })

  const onScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop
      let scrollDir = null
      if (st > lastScrollTop) {
        // downscroll code
        scrollDir = 'down'
      } else {
        // upscroll code
        scrollDir = 'up'
      }

      if (lastScrollDir !== scrollDir) {
        console.log('scrollDirection: ', scrollDirection);
        if (scrollDir === 'down') {
          animateMarquee(scrollDirection === 1 ? 'left' : 'right')
          lastScrollDir = scrollDir
        } else {
          animateMarquee(scrollDirection === 1 ? 'right' : 'left')
          lastScrollDir = scrollDir
        }
      }

      lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
  }
  
  const onResize = () => {
    clearTimeout(resize)
    resize = setTimeout(function() {
      if (window.innerWidth !== previousWinWidth) {
        previousWinWidth = window.innerWidth
        resetMarquee()
      }
    }, 1000)
  }

  const resetMarquee = () => {
    animation.pause()
    setMarquee()
    marquee()
  }

  const setMarquee = () => {
    boxWidth = boxEl.offsetWidth
    totalWidth = boxWidth * boxCount //  * n of boxes
    no01 = marqueeEl.querySelectorAll('.box')
    dirFromLeft = '+=' + totalWidth
    dirFromRight = '-=' + totalWidth

    mod = gsap.utils.wrap(0, totalWidth)

    boxesEl.setAttribute('style', 'left: -' + boxWidth + 'px')

    gsap.set(no01, {
      x(i) {
        return i * boxWidth
      }
    })
  }

  const marquee = () => {
    animation = TweenLite.to(no01, {
      x: currentDir,
      modifiers: {
        x: x => mod(parseFloat(x)) + 'px'
      },
      duration: speed,
      ease: Linear.easeNone,
      repeat: -1
    })
  }
  
  const animateMarquee = (dir) => {
    if (dir === 'left') {
      currentDir = dirFromLeft
    } else {
      currentDir = dirFromRight
    }
    marquee()
  }

</script>

<div bind:this={wrapperEl} class="w-full overflow-x-hidden opacity-0">
  <div
    bind:this={marqueeEl}
    class="wrapper overflow-hidden w-[200%] h-40 flex items-center"
    style="margin-left: -200px"
  >
    <div bind:this={boxesEl} class="relative my-auto">
      {#each {length: boxCount} as _}
        <div
          bind:this={boxEl}
          class="box absolute font-sans px-4 text-9xl leading-4 font-thin tracking-tight whitespace-nowrap uppercase"
        >
          <slot></slot>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
</style>