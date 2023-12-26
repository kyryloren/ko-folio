'use client'

import styled from 'styled-components'
import { GridWrapper, Z_INDEX } from 'styles'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${Z_INDEX.nav};
  color: ${({ theme }) => `rgb(${theme.text})`};
  padding: 2vw 0;
  opacity: 0;
  mix-blend-mode: difference;

  a {
    mix-blend-mode: difference;
    text-transform: uppercase;
  }
`
export const CustomGridWrapper = styled(GridWrapper)`
  align-items: center;
`
export const LinksWrapper = styled.nav`
  display: flex;
  gap: 2vw;
  align-items: center;
`
