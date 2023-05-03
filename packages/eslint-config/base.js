const { resolve } = require('path');

// See: https://github.com/eslint/eslint/issues/3458
// @ts-expect-error No types available
require('@rushstack/eslint-patch/modern-module-resolution');
const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
	root: true,
	extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  	'plugin:@typescript-eslint/strict',
		'turbo'
	],
	parserOptions: {
    tsconfigRootDir: __dirname,
	},
  reportUnusedDisableDirectives: true,
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', ".eslintrc.js"],
}
