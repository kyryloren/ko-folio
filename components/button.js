'use client'
import React, { useRef, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import gsap from 'gsap'
import styled, { css } from 'styled-components'
import { useIsTouchDevice } from 'hooks'
import { Normal, media } from 'styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import { animatePageOut } from 'lib'

const ButtonWrapper = styled.a`
  display: block;
  position: relative;
  padding: 0.4vw 2.5vw;
  border-radius: 35vw;
  border: 0.2vw solid
    ${({ $reverse, theme }) =>
      $reverse ? `rgb(${theme.gray})` : `rgb(${theme.text})`};
  color: ${({ $reverse, theme }) =>
    $reverse ? `rgb(${theme.gray})` : `rgb(${theme.text})`};
  text-decoration: none;
  height: fit-content;
  width: fit-content;
  will-change: transform;
  cursor: pointer;
  pointer-events: all;
  overflow: hidden;
  transform-origin: bottom left;
  --scale: 0;

  &:before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => `rgb(${theme.text})`};
    transform-origin: center center; /* Default origin, will be dynamically updated */
    inset: 0px;
    border-radius: 35vw;
    z-index: -1;
    mix-blend-mode: difference;
    transform: scale(var(--scale));
  }

  ${media.desktop`
    padding: 0.5rem 2rem;
    border-radius: 35px;
  `}
`

const ButtonStyle = css`
  ${Normal}
  position: relative;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  pointer-events: all;
  text-transform: uppercase;
  mix-blend-mode: difference;

  &:disabled {
    background-color: var(--black);
  }
`

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledButton = styled.div`
  ${ButtonStyle};
`

const CustomButton = ({
  href,
  to,
  target,
  children,
  $reverse,
  onClick,
  className,
  ...rest
}) => {
  const isTouchDevice = useIsTouchDevice()
  const movingContainerRef = useRef(null)
  const linesRef = useRef({ line1: null, line2: null })
  const tl = useRef(gsap.timeline({ paused: true }))
  const router = useRouter()
  const pathName = usePathname()

  useIsomorphicLayoutEffect(() => {
    const { line1, line2 } = linesRef.current
    // Properly initialize text positions for line1 and line2
    gsap.set(line1, { yPercent: 0 })
    gsap.set(line2, { yPercent: 100 })

    // Initialize animation timeline for text transition
    tl.current
      .to(line1, { yPercent: -100, duration: 0.5, ease: 'power3.inOut' }, 0)
      .to(line2, { yPercent: 0, duration: 0.5, ease: 'power3.inOut' }, 0)
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      if (isTouchDevice) return

      const bounds = movingContainerRef.current.getBoundingClientRect()
      const centerX = bounds.left + bounds.width / 2
      const distanceX = e.clientX - centerX
      const magnetThreshold = 100

      const xPosition =
        Math.abs(distanceX) < magnetThreshold ? distanceX : bounds.clientWidth
      const yPosition =
        (e.clientY - bounds.top - movingContainerRef.current.clientHeight) / 2

      gsap.to(movingContainerRef.current, {
        x: xPosition,
        y: yPosition,
        scale: 1.1,
        duration: 1,
        ease: 'expo.out',
      })
    },
    [isTouchDevice],
  )

  const handleMouseEnter = useCallback((e) => {
    const bounds = movingContainerRef.current.getBoundingClientRect()

    // Calculate mouse position relative to the button's dimensions
    const mouseX = ((e.clientX - bounds.left) / bounds.width) * 100
    const mouseY = ((e.clientY - bounds.top) / bounds.height) * 100

    // Update transform-origin based on where the mouse enters
    gsap.set(movingContainerRef.current, {
      '--scale': 1,
      '--origin': `${mouseX}% ${mouseY}%`, // Set the dynamic origin
    })

    // Play the timeline for text
    tl.current.play()

    gsap.to(movingContainerRef.current, {
      '--scale': 1,
      duration: 1,
      ease: 'expo.out',
    })
  }, [])

  const handleMouseExit = useCallback(() => {
    tl.current.reverse() // Reverse the timeline when mouse leaves
    gsap.to(movingContainerRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      '--scale': 0,
      ease: 'expo.out',
    })
  }, [])

  const handleClick = useCallback(
    (e) => {
      e.preventDefault()
      animatePageOut(href || to, router, pathName)
    },
    [href, to, router, pathName],
  )

  const renderButtonContent = () => (
    <StyledButton>
      <div ref={(el) => (linesRef.current.line1 = el)}>{children}</div>
      <StyledSpan ref={(el) => (linesRef.current.line2 = el)}>
        {children}
      </StyledSpan>
    </StyledButton>
  )

  return (
    <div onClick={handleClick} className={className}>
      <ButtonWrapper
        href={href || to}
        ref={movingContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseExit}
        onClick={onClick}
        $reverse={$reverse}
        target={target === '_blank' ? '_blank' : undefined}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        role="button"
        {...rest}
      >
        {renderButtonContent()}
      </ButtonWrapper>
    </div>
  )
}

export default CustomButton
