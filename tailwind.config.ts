import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0c00ff',
          light: '#F5F8FF',
          dark: '#0A00D1',
          darker: '#06007A',
        },
        accent: {
          DEFAULT: '#fee100',
          light: '#FFFAEB',
          dark: '#E6CD00',
        },
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'texte-principal': 'var(--color-texte-principal)',
        'texte-secondaire': 'var(--color-texte-secondaire)',
      },
    },
  },
  plugins: [],
} satisfies Config;