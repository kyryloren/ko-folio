'use client'

import { Container } from 'styles'
import { CustomGridWrapper, HeaderWrapper, LinksWrapper } from './styles'
import CustomLink from 'components/link'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'
import { useRef } from 'react'
import CustomButton from 'components/button'

const Nav = () => {
  const sectionRef = useRef()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.set(sectionRef.current, { opacity: 1 })
      tl.from(
        gsap.utils.toArray('.logo'),
        {
          yPercent: 100,
          duration: 2,
          ease: 'power4.out',
          delay: 0.25,
        },
        0,
      ).from(
        gsap.utils.toArray('.reveal-nav-1'),
        {
          yPercent: 100,
          duration: 2,
          stagger: 0.02,
          ease: 'power4.out',
        },
        0.5,
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <HeaderWrapper ref={sectionRef}>
      <Container>
        <CustomGridWrapper>
          <div>
            <div className="overflow">
              <CustomLink href="/" className="logo enabled">
                Kyrylo Orlov
              </CustomLink>
            </div>
          </div>
          <LinksWrapper>
            <div className="overflow">
              <CustomLink className="reveal-nav-1 enabled" href="/about">
                About
              </CustomLink>
            </div>
            <div className="overflow">
              <CustomLink className="reveal-nav-1 enabled" href="/projects">
                Projects
              </CustomLink>
            </div>
          </LinksWrapper>
          <CustomButton className="reveal-nav-2" href="/contact">
            Avaiable for work
          </CustomButton>
        </CustomGridWrapper>
      </Container>
    </HeaderWrapper>
  )
}

export default Nav
