import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'text': 'var(--color-text)',
        'background': 'var(--color-background)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',
      },
      fontFamily: {
        DigiPixel: ["DigiPixel", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config