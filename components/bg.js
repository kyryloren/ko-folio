'use client'

import { useEffect, useRef } from 'react'
import { useWindowSize } from 'react-use'
import { useIsTouchDevice } from 'hooks'
import gsap from 'gsap'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`
const Blob = styled.div`
  width: 80vw;
  height: 80vw;
  background: radial-gradient(
    circle,
    rgba(28, 32, 28, 1) 0%,
    rgba(28, 32, 28, 0.5) 50%,
    rgba(20, 23, 20, 1) 90%
  );
`

function Background({ className, speed = 100 }) {
  const { width, height } = useWindowSize()
  const isTouchDevice = useIsTouchDevice()

  const childRef = useRef()

  useEffect(() => {
    const onMouseMove = (e) => {
      if (isTouchDevice) return
      const x = (e.clientX / width) * 2 * speed
      const y = (e.clientY / height) * 2 * speed

      console.log(width)

      gsap.to(childRef.current, {
        x,
        y,
        duration: 1,
        ease: 'expo.out',
      })
    }

    window.addEventListener('mousemove', onMouseMove, false)

    return () => {
      window.removeEventListener('mousemove', onMouseMove, false)
    }
  }, [speed])

  return (
    <Wrapper className={className}>
      <Blob ref={childRef} />
    </Wrapper>
  )
}

export default Background
