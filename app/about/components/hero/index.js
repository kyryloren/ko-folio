'use client'

import { Container } from 'styles'
import {
  CustomGridWrapper,
  HeroWrapper,
  ImageWrapper,
  RevealImg,
  TextWrapper,
} from './styles'
import { CustomImage } from 'components'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'
import { useRef } from 'react'
import Div100vh from 'react-div-100vh'

const Hero = () => {
  const sectionTarget = useRef()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.set(sectionTarget.current, { opacity: 1 })
      tl.from(
        gsap.utils.toArray('.reveal-hero-1'),
        {
          yPercent: 100,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power4.out',
        },
        0,
      ).to(
        '.reveal-hero-2',
        {
          scaleY: 0,
          duration: 2,
          ease: 'power4.out',
        },
        0.5,
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <Div100vh>
      <HeroWrapper ref={sectionTarget}>
        <Container>
          <CustomGridWrapper>
            <TextWrapper>
              <div className="overflow">
                <div className="reveal-hero-1 enabled">Kyrylo</div>
              </div>
              <br />
              <div className="overflow">
                <div className="reveal-hero-1 enabled">Orlov</div>
              </div>
            </TextWrapper>
            <ImageWrapper>
              <RevealImg className="reveal-hero-2" />
              <CustomImage
                src="/kyrylo.webp"
                alt="Kyrylo Orlov"
                blur={`L5EooR~m3Y5t0J%J%2Os0JRr%2_2`}
              />
            </ImageWrapper>
          </CustomGridWrapper>
        </Container>
      </HeroWrapper>
    </Div100vh>
  )
}

export default Hero
