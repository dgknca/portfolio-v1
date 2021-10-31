<script lang="ts">
  // eslint-disable-next-line no-unused-vars
  import { gsap, TweenLite, Linear, Power3, TimelineLite } from 'gsap/dist/gsap.js'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
  gsap.registerPlugin(ScrollTrigger)
  import { onMount, tick } from 'svelte'

  export let scrollDirection: 0 | 1 = 1
  export let speed = 160
  export let repeat = 4

  let boxWidth = null
  let totalWidth = null
  let no01 = null
  let currentDir = null
  let dirFromLeft = null
  let dirFromRight = null
  let mod = null
  let animation = null
  let scrollAnimation = new TimelineLite()
  let resize = null
  let previousWinWidth = null
  let lastScrollDir = 'down'
  let lastScrollTop = null

  // refs
  let wrapperEl = null
  let marqueeEl = null
  let boxEl = null
  let boxesEl = null

  onMount(async () => {
    ScrollTrigger.defaults({
      toggleActions: 'restart pause resume pause'
    })

    await tick()

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
      scrollDir = 'down'
    } else {
      scrollDir = 'up'
    }

    if (lastScrollDir !== scrollDir) {
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
    resize = setTimeout(function () {
      if (window.innerWidth !== previousWinWidth) {
        previousWinWidth = window.innerWidth
        resetMarquee()
      }
    }, 100)
  }

  const resetMarquee = () => {
    animation.pause()
    setMarquee()
    marquee()
  }

  const setMarquee = () => {
    boxWidth = boxEl.offsetWidth
    totalWidth = boxWidth * repeat
    no01 = marqueeEl.querySelectorAll('.box')
    dirFromLeft = '+=' + totalWidth
    dirFromRight = '-=' + totalWidth

    mod = gsap.utils.wrap(0, totalWidth)

    gsap.to(boxesEl, {
      x: boxWidth * -1
    })

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

  const animateMarquee = dir => {
    if (dir === 'left') {
      currentDir = dirFromLeft
    } else {
      currentDir = dirFromRight
    }
    marquee()
  }
</script>

<div bind:this={wrapperEl} class="w-full overflow-hidden -my-8 opacity-0">
  <div
    bind:this={marqueeEl}
    class="wrapper overflow-hidden w-[200%] h-44 flex items-center"
    style="margin-left: -200px"
  >
    <div bind:this={boxesEl} class="relative -my-4">
      {#each { length: repeat } as _}
        <div
          bind:this={boxEl}
          class="box absolute font-inter px-4 text-9xl leading-4 font-thin tracking-widest whitespace-nowrap uppercase"
        >
          <slot />
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
</style>
