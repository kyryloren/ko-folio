'use client'

import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { useLenis } from '@studio-freight/react-lenis'
import { Container } from 'styles'
import {
  InnerContent,
  StyledFooter,
  TitleWrapper,
  ContentWrapper,
  BottomWrapper,
  LinkWrapper,
} from './styles'
import gsap from 'gsap'
import CustomLink from 'components/link'
import Div100vh from 'react-div-100vh'

const Footer = () => {
  const sectionTarget = useRef()
  const lenis = useLenis()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom-=10%',
          toggleActions: 'play none none reset',
        },
      })

      gsap.to(sectionTarget.current, {
        width: '80%',
        height: '70%',
        borderRadius: '8vw',
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom',
          toggleActions: 'play none none reset',
          scrub: true,
        },
      })
      tl.from(
        gsap.utils.toArray('.reveal-footer-1'),
        {
          yPercent: 100,
          duration: 1.5,
          stagger: 0.05,
          ease: 'power4.out',
        },
        0,
      )
        .from(
          gsap.utils.toArray('.reveal-footer-2'),
          {
            opacity: 0,
            duration: 1.5,
            stagger: 0.05,
            ease: 'power4.out',
          },
          0.5,
        )
        .from(
          gsap.utils.toArray('.reveal-footer-3'),
          {
            yPercent: 100,
            duration: 1.5,
            stagger: 0.05,
            ease: 'power4.out',
          },
          0.75,
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <Div100vh>
      <StyledFooter>
        <InnerContent ref={sectionTarget}>
          <Container>
            <ContentWrapper>
              <TitleWrapper>
                <div className="overflow">
                  <div className="reveal-footer-1 enabled">Let's&nbsp;</div>
                </div>
                <div className="overflow">
                  <div className="reveal-footer-1 enabled">work</div>
                </div>
                <br />
                <div className="overflow bottom">
                  <div className="reveal-footer-1 enabled">together</div>
                </div>
              </TitleWrapper>
              <CustomLink
                className="reveal-footer-2"
                href="mailto@hello@kyryloorlov.com"
                target="_blank"
              >
                hello@kyryloorlov.com
              </CustomLink>
            </ContentWrapper>
            <BottomWrapper>
              <LinkWrapper>
                <div className="overflow">
                  <CustomLink
                    to="https://instagram.com/kyryloren"
                    target="_blank"
                    $dark
                    className="reveal-footer-3"
                  >
                    ING
                  </CustomLink>
                </div>
                <div className="overflow">
                  <CustomLink
                    to="https://www.linkedin.com/in/kyryloren"
                    target="_blank"
                    $dark
                    className="reveal-footer-3"
                  >
                    LIN
                  </CustomLink>
                </div>
                <div className="overflow">
                  <CustomLink
                    to="https://github.com/kyryloren"
                    target="_blank"
                    $dark
                    className="reveal-footer-3"
                  >
                    GIT
                  </CustomLink>
                </div>
                <div className="overflow">
                  <CustomLink
                    to="https://dribbble.com/kyryloren"
                    target="_blank"
                    $dark
                    className="reveal-footer-3"
                  >
                    DRB
                  </CustomLink>
                </div>
              </LinkWrapper>
              <div className="overflow">
                <CustomLink
                  to="/"
                  target="_blank"
                  $dark
                  className="reveal-footer-3 hide"
                  onClick={(e) => {
                    e.preventDefault()
                    lenis.scrollTo(0)
                  }}
                >
                  BACK TO TOP
                </CustomLink>
              </div>
            </BottomWrapper>
          </Container>
        </InnerContent>
      </StyledFooter>
    </Div100vh>
  )
}

export default Footer
