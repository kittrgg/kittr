const { resolve } = require('node:path');
const {rules} = require('./utils/rules')

// See: https://github.com/eslint/eslint/issues/3458
// @ts-expect-error No types available
require('@rushstack/eslint-patch/modern-module-resolution');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
	root: true,
	extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
	].map((config) => require.resolve(config)),
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
  rules,
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  overrides: [
    {
      files: ['**/*.test.*'],
      extends: [require.resolve('@vercel/style-guide/eslint/jest')],
    },
    {
      files: ['jest.config.*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
}
