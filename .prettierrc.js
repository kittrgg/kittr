module.exports = {
  ...require("@vercel/style-guide/prettier"),
  plugins: [
    "prettier-plugin-packagejson",
    require("prettier-plugin-tailwindcss"),
  ],
};
