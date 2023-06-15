/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
};
