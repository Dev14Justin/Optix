import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0c00ff',
          light: '#F5F8FF',
          dark: '#0A00D1',
          darker: '#06007A',
        },
        accent: '#fee100',
        'texte-principal': '#1C1C1C',
        'texte-secondaire': '#6B7280',
        'background': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config