/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "mons": "'Montserrat', sans serif"
      },
      colors: {
        'primary' : '#FDC500',
        'secondary' : '#f8f4e3'
      }
    },
  },
  plugins: [],
}

