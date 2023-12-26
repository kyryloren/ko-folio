'use client'

import { useRef } from 'react'
import { CustomImage, Information } from 'components'
import { OverlayInfo, ProjectWrapper, ProjectsArray } from './styles'
import gsap from 'gsap'
import { Flip } from 'gsap/dist/Flip'
import { NormalText } from 'styles'

gsap.registerPlugin(Flip)

const projectMap = [
  { src: '/astrostudios.webp', title: 'Astro Studios', link: '/astro-studios' },
  { src: '/outerlabs.webp', title: 'Outer Labs Studio', link: '/outer-labs' },
  { src: '/outerlabs.webp', title: 'Sarah Khosla', link: '/sarah-khosla' },
]

const Projects = () => {
  const projectsRef = useRef()
  const sectionTarget = useRef()

  const handleHovering = (hoveredNum) => {
    for (let i = 1; i <= 3; i++) {
      gsap.to(projectsRef.current, {
        [`--fr-value-${i}`]: hoveredNum === i ? '2fr' : '1fr',
        duration: 1,
        ease: 'power4.out',
      })
    }
  }

  const handleLeave = () => handleHovering(null)

  return (
    <Information ref={sectionTarget} title="Selected work (3)" subtitle="2023">
      <ProjectsArray ref={projectsRef}>
        {projectMap.map((project, index) => (
          <ProjectWrapper
            key={index}
            href={project.link}
            onMouseEnter={() => handleHovering(index + 1)}
            onMouseLeave={handleLeave}
            className="reveal-project"
          >
            <OverlayInfo>
              <NormalText>{project.title}</NormalText>
            </OverlayInfo>
            <CustomImage src={project.src} alt={project.title} />
          </ProjectWrapper>
        ))}
      </ProjectsArray>
    </Information>
  )
}

export default Projects
