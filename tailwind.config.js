/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontSize: {
        '3xl': '2rem',

      },
      colors: {
        'primary': '#896AF9',
        'secondary': '#FFFFFF',
        'tertiary': '#000000',
        'quaternary': '#000000',
        'quinary': '#000000',
        'senary': '#000000',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
    , require('@tailwindcss/typography')
  ],
};
