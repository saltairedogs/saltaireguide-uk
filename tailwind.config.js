/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', md: '1.25rem', lg: '1.5rem' },
      screens: { xl: '1200px', '2xl': '1400px' },
    },
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: { soft: '0 1px 2px rgba(0,0,0,.06)', elev: '0 10px 24px rgba(0,0,0,.12)' },
      borderRadius: { xl: '1.25rem', '2xl': '1.5rem' },
      aspectRatio: { hero: '4 / 3', og: '1200 / 630' },
      keyframes: { 'fade-in-up': { '0%': { opacity: 0, transform: 'translateY(6px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } } },
      animation: { in: 'fade-in-up .35s ease forwards' },
    },
  },
  plugins: [],
}
