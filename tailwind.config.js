/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['Overpass'],
    },
    extend: {
      colors: {
        'fm-orange': 'hsl(25, 97%, 53%)',
        'l-gray': 'hsl(217, 12%, 63%)',
        'md-gray': 'hsl(216, 12%, 54%)',
        'd-gray': 'hsl(213, 19%, 18%)',
        'v-dark': 'hsl(216, 12%, 8%)',
      },
      // fontSize: {
      //   'leading-tiny': '',
      // },
    },
  },
  plugins: [],
};
