const sharedConfig = require("@kittr/tailwind/index.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/new/**/*.{js,ts,jsx,tsx,mdx}"],
  // prefix ui lib classes to avoid conflicting with the app
  presets: [sharedConfig],
};
