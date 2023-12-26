'use client'

import styled from 'styled-components'
import { Huge, Normal } from 'styles'

export const TitleTextWrapper = styled.div`
  grid-column: 1 / span 3;
  max-width: 70%;

  .reveal-about-1 {
    ${Huge}
  }
`
export const ContentTextWrapper = styled.div`
  grid-column: 2 / span 3;
  max-width: 39%;
  margin-top: 4vw;

  .reveal-about-2 {
    ${Normal}
    text-transform: uppercase;
    color: ${({ theme }) => `rgb(${theme.gray})`};
  }
  .reveal-about-3 {
    margin-top: 2vw;
  }
`
