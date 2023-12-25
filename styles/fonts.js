import localFont from 'next/font/local'

const gtwalsh = localFont({
  adjustFontFallback: 'Arial',
  variable: '--font-text',
  preload: true,
  fallback: [
    'San Francisco',
    'SF Pro Text',
    '-apple-system',
    'system-ui',
    'sans-serif',
  ],
  src: [
    {
      path: '../public/fonts/GTWalsheimPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GTWalsheimPro-RegularOblique.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/GTWalsheimPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/GTWalsheimPro-MediumOblique.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/GTWalsheimPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/GTWalsheimPro-BoldOblique.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

export default gtwalsh
