/** @type {import('tailwindcss').Config} */
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
          light: '#F5F8FF', // Très clair pour les fonds de section
          dark: '#0A00D1',   // Pour les hover ou éléments actifs
          darker: '#06007A', // Pour le footer ou textes sombres
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
}
