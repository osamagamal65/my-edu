/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontSize: {
        '3xl': '2rem',

      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/typography')
],
};
