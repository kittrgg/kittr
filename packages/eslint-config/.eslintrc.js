module.exports = {
  root: true,
  extends: [require.resolve('./node.js')],
	parserOptions: {
      project: `${__dirname}/tsconfig.json`
  },
  rules: {
    "no-console": "off",
    "capitalized-comments": "off" // need this for the hashbang bin
  }
};
