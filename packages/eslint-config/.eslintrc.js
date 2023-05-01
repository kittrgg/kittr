module.exports = {
  root: true,
  extends: [require.resolve('./base.js')],
	parserOptions: {
      project: __dirname + "/tsconfig.json"
  }
};
