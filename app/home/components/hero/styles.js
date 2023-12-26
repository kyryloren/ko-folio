'use client'

import styled from 'styled-components'
import { Display, GridWrapper, Normal, Z_INDEX } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: ${Z_INDEX.hero};
`
export const ContentWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .reveal-hero-1 {
    ${Display}
  }
`
export const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
`
export const BottomLine = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -2vw;
`

export const FooterWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`
export const CustomGridWrapper = styled(GridWrapper)`
  align-items: flex-end;
  padding-bottom: 1.5vw;

  .reveal-hero-4 {
    color: ${({ theme }) => `rgb(${theme.gray})`};
    text-transform: uppercase;
    ${Normal}
  }
`
export const LinkWrapper = styled.div`
  display: flex;
  gap: 2vw;
`
export const ParagraphWrapper = styled.div`
  .reveal-hero-3 {
    ${Normal}
    text-transform: uppercase;
  }
`
