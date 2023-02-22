/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D2464',
        secondary: '#5A6793',
        border: '#C6CCE0',
      },
      fontSize: {
        '14': ['14px', '18px'],
        h4: ['24px', '32px'],
      }
    },
  },
  plugins: [],
}
