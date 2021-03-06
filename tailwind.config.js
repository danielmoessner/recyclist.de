const typography = require('@tailwindcss/typography');
const colors = require('tailwindcss/colors');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const forms = require('@tailwindcss/forms');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'active'],
      scale: ['group-hover'],
      margin: ['last'],
    },
  },
  plugins: [typography, aspectRatio, forms],
};
