/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@kittr/lint/next')],
  parserOptions: {
    project: __dirname + '/tsconfig.json',
  },
};
