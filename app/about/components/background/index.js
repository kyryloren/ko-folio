'use client'

import { Information } from 'components'
import { TextWrapper } from './styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'
import { useRef } from 'react'

const Background = () => {
  let sectionTarget = useRef()
  const para1 = `As a Computer Science major based in NYC, I began my coding journey at 7 years old, initially exploring Unity3D and game design. My interests evolved rapidly, spanning app development, cybersecurity, and web development. My professional experience includes several years on Amazon's cybersecurity team, where I contributed to software development and internal projects. Throughout my career, I've been consistently drawn to the synergy between design and technology, always striving to blend aesthetic appeal with functional design, regardless of the field.`
  const para2 = `In 2021, I launched Outer Labs Studio, a boutique web and branding agency. Since then, my focus has been on a mix of freelance endeavors, agency projects, and academic commitments.`

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom-=10%',
          toggleActions: 'play none none reset',
        },
      })

      tl.from(gsap.utils.toArray('.reveal-bg-1'), {
        yPercent: 100,
        duration: 1,
        stagger: 0.01,
        ease: 'power4.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <Information title="Background" subtitle="Updated 2024" ref={sectionTarget}>
      <TextWrapper>
        {para1.split(' ').map((word, index) => (
          <div className="overflow" key={index}>
            <div className="reveal-bg-1 enabled">{word}&nbsp;</div>
          </div>
        ))}
        <div className="para-2">
          {para2.split(' ').map((word, index) => (
            <div className="overflow" key={index}>
              <div className="reveal-bg-1 enabled">{word}&nbsp;</div>
            </div>
          ))}
        </div>
      </TextWrapper>
    </Information>
  )
}

export default Background
