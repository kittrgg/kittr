
module.exports = {
  root: true,
  extends: [require.resolve('@kittr/lint/base')],
	parserOptions: {
      project: __dirname + "/tsconfig.json"
  }
};
