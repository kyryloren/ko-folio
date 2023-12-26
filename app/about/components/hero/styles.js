'use client'

import styled from 'styled-components'
import { Display, GridWrapper, Z_INDEX } from 'styles'

export const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: ${Z_INDEX.hero};
`
export const CustomGridWrapper = styled(GridWrapper)`
  height: 100%;
`
export const ImageWrapper = styled.div`
  grid-column: 2 / span 3;
  position: relative;
  display: flex;
  align-self: center;
  width: 100%;
  max-width: 50%;
  height: 80svh;
  min-height: 40vw;
  border-radius: 2vw;
`
export const RevealImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => `rgb(${theme.body})`};
  z-index: ${Z_INDEX.hero};
  border-radius: 2vw;
  transform-origin: bottom center;
`
export const TextWrapper = styled.div`
  grid-column: 2 / span 3;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: -40%;
  z-index: ${Z_INDEX.hero + 1};

  .reveal-hero-1 {
    ${Display}
    text-transform: uppercase;
  }
`
