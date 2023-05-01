
module.exports = {
  root: true,
  extends: [require.resolve('@kittr/lint/next.js')],
	parserOptions: {
      project: __dirname + "/tsconfig.json"
  }
};
