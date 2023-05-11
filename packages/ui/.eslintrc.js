module.exports = {
  extends: [require.resolve('@kittr/lint/node')],
  ignorePatterns: ['./src/components'],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
  root: true,
};
