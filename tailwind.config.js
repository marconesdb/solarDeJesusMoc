/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: '#e7e5e4',
        primary: '#fff7ed',
        orange: '#ffedd5',
        orange100: '#fed7aa',
        orange200: '#fdba74',
        orange300: '#fb923c',
        orange400: '#f97316',
        orange500: '#ea580c',
        orange600: '#c2410c',
        orange700: '#9a3412',
        orange800: '#7c2d12',
        orange900: '#431407',
        black: '#020617',
        black100: '#333',
        blue700: '#0369a1',
      },
      screens: {
        'sm': '640px',
        // outras definições de breakpoint
      },
      spacing: {
        'plus-10px': 'calc(100% + 10px)',
      },

      fontFamily: {
        podkova: ['Podkova', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },

    },
  },
  plugins: [
    aspectRatio,
  ],
};
