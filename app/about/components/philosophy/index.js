'use client'

import { Information } from 'components'
import { TextWrapper } from './styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'
import { useRef } from 'react'

const Philosophy = () => {
  let sectionTarget = useRef()
  const text = `I believe that design and aesthetics intricately weave through every facet of our contemporary lives. To thrive in today's world, one must grasp the nuanced interplay between the physical elements and theoretical ideas that shape individuals, objects, and experiences.`

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom',
          toggleActions: 'play none none reset',
        },
      })

      tl.from(gsap.utils.toArray('.reveal-phil-1'), {
        yPercent: 100,
        duration: 1,
        stagger: 0.02,
        ease: 'power4.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <Information title="Philosophy" ref={sectionTarget}>
      <TextWrapper>
        {text.split(' ').map((word, index) => (
          <div className="overflow" key={index}>
            <div className="reveal-phil-1 enabled">{word}&nbsp;</div>
          </div>
        ))}
      </TextWrapper>
    </Information>
  )
}

export default Philosophy
