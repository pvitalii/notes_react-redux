/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '15%': '15%'
      },
      colors: {
        primary: '#999999'
      },
      minWidth: {
        '50%': '50%',
      },
      maxWidth: {
        '70%': '70%'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}

