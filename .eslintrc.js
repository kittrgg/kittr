module.exports = {
  root: true,
  extends: [require.resolve('./packages/config-eslint/node')],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
};
