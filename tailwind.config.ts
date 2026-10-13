import type { Config } from 'tailwindcss'

// Brand colours taken from the Peechbuilder letterhead: deep navy and orange.
export default <Config>{
  content: ['./app/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#14233A', 900: '#0C1626', 800: '#14233A', 700: '#1F3352', 100: '#E6EBF2', 50: '#F3F6F9' },
        orange: { DEFAULT: '#F26B1D', 600: '#D9560C', 400: '#F7924F', 100: '#FDE8DA', 50: '#FEF5EE' },
        ink: '#14233A',
        muted: '#5B6778',
        line: '#E3E8EF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      maxWidth: { site: '1180px' },
    },
  },
}
