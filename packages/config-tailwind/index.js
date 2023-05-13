/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    // It may be possible to adjust this to be more tight
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  // We would put our colors, overrides, extras, etc. here
  // to have consistency across all apps
};
