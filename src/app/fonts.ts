import localFont from 'next/font/local'

// Inter (variable, normal + italic)
export const inter = localFont({
  src: [
    { path: '../../public/fonts/inter/InterVariable.woff2', weight: '100 900', style: 'normal' },
    { path: '../../public/fonts/inter/InterVariable-Italic.woff2', weight: '100 900', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: 'Arial',
})

// Playfair Display (variable: normal + italic)
export const playfair = localFont({
  src: [
    // Accept either variable or a minimal static set; variable preferred
    { path: '../../public/fonts/playfair/PlayfairDisplay-VariableFont_wght.woff2', weight: '100 900', style: 'normal' },
    { path: '../../public/fonts/playfair/PlayfairDisplay-Italic-VariableFont_wght.woff2', weight: '100 900', style: 'italic' },
    // Fallbacks if variable not present (optional):
    { path: '../../public/fonts/playfair/PlayfairDisplay-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/playfair/PlayfairDisplay-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/playfair/PlayfairDisplay-Bold.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-playfair',
  adjustFontFallback: 'Times New Roman',
})

// Crimson Text (statics: 400/600/700 normal+italic)
export const crimson = localFont({
  src: [
    { path: '../../public/fonts/crimson/CrimsonText-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/crimson/CrimsonText-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../../public/fonts/crimson/CrimsonText-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/crimson/CrimsonText-SemiBoldItalic.woff2', weight: '600', style: 'italic' },
    { path: '../../public/fonts/crimson/CrimsonText-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/crimson/CrimsonText-BoldItalic.woff2', weight: '700', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-crimson',
  adjustFontFallback: 'Times New Roman',
})
