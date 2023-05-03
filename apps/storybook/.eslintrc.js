

module.exports = {
  root: true,
  extends: [require.resolve('@kittr/lint/node')],
	parserOptions: {
      project: `${__dirname}/tsconfig.json`
  }
};
