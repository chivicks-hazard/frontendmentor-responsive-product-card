/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '480px',
      'lg': '640px',
      'xl': '768px',
      '2xl': '1024px',
      '3xl': '1280px',
      '4xl': '1536px'
    },
    extend: {
      colors: {
        darkCyan: 'hsl(158, 36%, 37%)', // Primary color
        cream: 'hsl(158, 36%, 37%)', // Secondary color
        veryDarkBlue: 'hsl(158, 36%, 37%)', // Neutral 1
        darkGrayishBlue: 'hsl(228, 12%, 48%)', // Neutral 2
        white: 'hsl(0, 0%, 100%)', // White
      },
      fontSize: {
        base: '14px'
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Fraunces: ['Fraunces', 'serif']
      },
      fontWeight: {
        normal: '500',
        bold: '700'
      }
    },
  },
  plugins: [],
}