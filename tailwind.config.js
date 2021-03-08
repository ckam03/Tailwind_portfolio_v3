const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './public/*.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'Quicksand': ['Quicksand', 'sans-serif']
      },

      colors: {
        'offwhite': '#fbfbfb',
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        amber: colors.amber,
        teal: colors.teal,
        red: colors.red,
      },
      backgroundImage: {
        'dashboard': "url('/assets/dashboard.jpg')"
      },
      spacing: {
        '1/2': '50%',
        '2/3': '66.666667%',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
