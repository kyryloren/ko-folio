import Project from 'components/project'

const title = 'Outer Labs Studio - Creative design and development'
const description = `Outer Labs expertly fuses creativity with cutting-edge development, crafting award-winning digital solutions including websites, applications, and comprehensive branding strategies that revolutionize brand identities and experiences.`
const url = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.kyryloorlov.com'
}/outer-labs-studio`
const image = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.kyryloorlov.com'
}/outerlabs-1.webp`

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    images: { url: image, width: 1200, height: 630 },
  },
  twitter: {
    title: title,
    description: description,
    url: url,
    images: { url: image, width: 1200, height: 630 },
  },
}

export default function Home() {
  return (
    <>
      <Project
        title="Outer&nbsp;Labs&nbsp;Studio"
        heroImage={{
          src: '/outer-labs/outerlabs-1.webp',
          alt: 'Outer Labs Studio',
          blur: `LHCP-N0K00~q%NV@D%%M4nxu-;IA`,
        }}
        about={{
          subtitle: `Outer Labs expertly fuses creativity with cutting-edge development, crafting award-winning digital solutions including websites, applications, and comprehensive branding strategies that revolutionize brand identities and experiences.`,
          paragraphs: [
            `At Outer Labs Studio, I crafted a website that embodies the brand's commitment to high-end development services and expert design. The UI is deigned to be simple, ensuring clarity and direct communication with potential clients. However, it's far from mundane. I've infused the site with unique motion effects and playful layouts, creating an engaging and memorable experience that stands out in a sea of ordinary agency websites.`,
          ],
          live: 'https://outerlabs.studio',
        }}
        images={[
          {
            src: '/outer-labs/outerlabs-2.webp',
            alt: 'Astro Studios team section',
            blur: `LbRMb$oft7Rk~qWBWBay9FofWBWC`,
          },
          {
            src: '/outer-labs/outerlabs-3.webp',
            alt: 'Astro Studios team section',
            blur: `L69sets;{Ioebbnmbbbb8_of_3of`,
          },
          {
            src: '/outer-labs/outerlabs-4.webp',
            alt: 'Astro Studios team section',
            blur: `L0QJfq?b03?u_3D%00Djt6D%004n`,
          },
          {
            src: '/outer-labs/outerlabs-5.webp',
            alt: 'Astro Studios team section',
            blur: `L4RW0b-;~q?b00xut7%M00f6D%Rj`,
          },
          {
            src: '/outer-labs/outerlabs-6.webp',
            alt: 'Astro Studios team section',
            blur: `L4Ad7hxu00j[xuofoft700of~qt7`,
          },
        ]}
      />
    </>
  )
}
