<a href="#0" class="button inline-block align-middle relative">
  <slot></slot>
</a>

<style lang="postcss">
  .button {
    &:after {
      content: "";
      width: 100%;
      display: block;
      border-bottom: 2px solid;
      position: absolute;
      bottom: -3px;
      left: 0;
      transform-origin: 30% 50%;
      pointer-events: none;
      transform: rotate(3deg) translate3d(0,3px,0) scaleX(.7);
      opacity: 0;
      transition: opacity .7s cubic-bezier(.19,1,.22,1), transform .7s cubic-bezier(.19,1,.22,1);
    }

    &:hover {
      &:after {
        transform: translateZ(0);
        opacity: 1;
        transition: opacity .4s cubic-bezier(.19,1,.22,1), transform .7s cubic-bezier(.19,1,.22,1);
      }
    }
  }
</style>