import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
        heading: ['Urbanist', 'sans-serif'],
      },
      colors: {
        // Couleurs de la charte graphique Optix
        primary: {
          50: '#E6EFFE',
          100: '#C3DAFD',
          200: '#8BB5FB',
          300: '#5390F9',
          DEFAULT: '#195BF7', // Bleu principal Optix
          600: '#1449C5',
          700: '#0F3793',
          800: '#0B2661',
          900: '#06142F',
        },
        secondary: {
          50: '#FFFBEB',
          100: '#FFF6CC',
          200: '#FFED99',
          300: '#FFE566',
          DEFAULT: '#FFE101', // Jaune principal Optix
          600: '#CCB401',
          700: '#998701',
          800: '#665A00',
          900: '#332D00',
        },
        // Tons neutres pour le texte et les arrière-plans
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Couleurs sémantiques
        background: '#FFFFFF',
        surface: '#F9FAFB',
        text: {
          primary: '#111827',
          secondary: '#6B7280',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;