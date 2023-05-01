const { resolve } = require('path');

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
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', ".eslintrc.js"],
}
