
module.exports = {
  root: true,
  extends: [require.resolve('@kittr/lint/base.js')],
	parserOptions: {
      project: __dirname + "/tsconfig.json"
  }
};
