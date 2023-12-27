'use client'

import { useRef } from 'react'
import { Information } from 'components'
import { Col, ServicesCols, TextWrapper } from './styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const Services = () => {
  let sectionTarget = useRef()
  const text = `I offer digital services across various different platforms. If you have custom service requests,`

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom-=10%',
          toggleActions: 'play none none reset',
        },
      })

      tl.from(
        gsap.utils.toArray('.reveal-services-1'),
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.02,
          ease: 'power4.out',
        },
        0,
      ).from(
        gsap.utils.toArray('.reveal-services-2'),
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.02,
          ease: 'power4.out',
        },
        0.75,
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <Information title="Services" ref={sectionTarget}>
      <TextWrapper>
        {text.split(' ').map((word, index) => (
          <div className="overflow" key={index}>
            <div className="reveal-services-1 enabled">{word}&nbsp;</div>
          </div>
        ))}
        <div className="overflow">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:hello@kyryloorlov.com"
            className="reveal-services-1 enabled"
          >
            let's talk
          </a>
        </div>
      </TextWrapper>
      <ServicesCols>
        <Col>
          <div className="overflow">
            <div className="reveal-services-2 enabled">Web design</div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">Web development</div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">CMS and backend</div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">
              Cloud infrastructure
            </div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">Creative direction</div>
          </div>
        </Col>
        <Col>
          <div className="overflow">
            <div className="reveal-services-2 enabled">UI/UX</div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">Strategy</div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">SEO optimization</div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">Design systems</div>
          </div>
        </Col>
      </ServicesCols>
    </Information>
  )
}

export default Services
