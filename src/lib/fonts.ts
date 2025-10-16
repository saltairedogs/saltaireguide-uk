// Centralized font setup — self-hosted via next/font/local
// Put the variable WOFF2 files in public/fonts/inter and Next will bundle them.

import localFont from 'next/font/local'

export const inter = localFont({
  src: [
    { path: '../../public/fonts/inter/InterVariable.woff2', weight: '100 900', style: 'normal' },
    { path: '../../public/fonts/inter/InterVariable-Italic.woff2', weight: '100 900', style: 'italic' },
  ],
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
})

// Vintage serif pair (self-hosted)
export const playfair = localFont({
  src: [
    { path: '../../public/fonts/playfair/PlayfairDisplay-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/playfair/PlayfairDisplay-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/playfair/PlayfairDisplay-Bold.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-playfair',
  adjustFontFallback: 'Times New Roman',
})

export const crimson = localFont({
  src: [
    { path: '../../public/fonts/crimson/CrimsonText-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/crimson/CrimsonText-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../../public/fonts/crimson/CrimsonText-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-crimson',
  adjustFontFallback: 'Times New Roman',
})
