'use client'

import { css } from 'styled-components'

const SmoothScroll = css`
  html {
    &:not(.dev) {
      &,
      * {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;

        &::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
        }
      }
    }
  }

  html.lenis {
    height: auto;
  }

  .lenis.lenis-smooth {
    scroll-behavior: auto;
  }

  .lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
  }

  .lenis.lenis-stopped {
    overflow: hidden;
  }

  .lenis.lenis-scrolling iframe {
    pointer-events: none;
  }
`

export default SmoothScroll
