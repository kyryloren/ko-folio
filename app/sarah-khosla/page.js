import Project from 'components/project'

const title = 'Sarah Khosla - Art Director and Graphic Designer'
const description = `Sarah Khosla is an independent graphic designer and art director located in Los Angeles. Some of the clients she's worked with include Google, RobinHood, and HBO Max.`
const url = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.kyryloorlov.com'
}/outer-labs-studio`
const image = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.kyryloorlov.com'
}/sara-khosla/sarahkhosla-1.webp`

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
        title="Sarah&nbsp;Khosla"
        heroImage={{
          src: '/sarah-khosla/sarahkhosla-1.webp',
          alt: 'Sarah Khosla',
          blur: `L15}y}-;00DjDPV@yCtk00Rk~q%K`,
        }}
        about={{
          subtitle: `Sarah Khosla is an independent graphic designer and art director located in Los Angeles. Some of the clients she's worked with include Google, RobinHood, and HBO Max.`,
          paragraphs: [
            `This version of Sarah's online portfolio, designed by her and developed by me, showcases her professional work through a straightforward yet impactful design. Utilizing NextJS, GSAP, and Strapi, I crafted both frontend and backend elements to ensure a swift and user-friendly experience, complemented by an aesthetically pleasing interface. The site is hosted on Vercel and DigitalOcean for optimal performance.`,
          ],
          live: 'https://outerlabs.studio',
        }}
        images={[
          {
            src: '/sarah-khosla/sarahkhosla-2.webp',
            alt: 'Portfolio hero section',
            blur: `L79%r5_3~j4T00-=Du.8IC00orn,`,
          },
          {
            src: '/sarah-khosla/sarahkhosla-3.webp',
            alt: 'Portfolio playground page',
            blur: `LFI}eV%200o~5800W8R400$%_4yD`,
          },
          {
            src: '/sarah-khosla/sarahkhosla-4.webp',
            alt: 'Portfolio about page',
            blur: `L64oK6IADi_N%hRPROx^DjtQx]IB`,
          },
          {
            src: '/sarah-khosla/sarahkhosla-5.webp',
            alt: 'Portfolio team section',
            blur: `L?P6{poft7WB~qa{RjoLIUayofay`,
          },
        ]}
      />
    </>
  )
}
