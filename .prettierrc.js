module.exports = {
  ...'@vercel/style-guide/prettier',
  plugins: [
    'prettier-plugin-packagejson',
    require('prettier-plugin-tailwindcss'),
  ],
};
