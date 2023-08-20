/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@kittr/lint/node')],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
  overrides: [
    {
      files: ['playwright.config.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/*.test.*'],
      rules: {
        'testing-library/prefer-screen-queries': 'off',
      },
    },
    {
      files: ['playwright.config.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
