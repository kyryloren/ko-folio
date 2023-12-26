'use client'

import { useRef } from 'react'
import { Container } from 'styles'
import { CustomGridWrapper, HeaderWrapper, LinksWrapper } from './styles'
import CustomLink from 'components/link'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'
import CustomButton from 'components/button'
import { useLenis } from '@studio-freight/react-lenis'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from 'lib'

const Nav = () => {
  const sectionRef = useRef()
  const lenis = useLenis()
  const router = useRouter()
  const path = usePathname()

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
              <CustomLink
                href="/"
                className="logo enabled"
                onClick={(e) => {
                  e.preventDefault()
                  if (path === '/') lenis.scrollTo(0)
                  else animatePageOut('/', router, path)
                }}
              >
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
          <CustomButton
            className="reveal-nav-2"
            aria-label="Contact"
            onClick={(e) => {
              e.preventDefault()
              lenis.scrollTo('bottom')
            }}
          >
            Avaiable for work
          </CustomButton>
        </CustomGridWrapper>
      </Container>
    </HeaderWrapper>
  )
}

export default Nav
