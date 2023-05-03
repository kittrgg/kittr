// See: https://github.com/eslint/eslint/issues/3458
// @ts-expect-error No types available
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  	'plugin:@typescript-eslint/strict',
		'turbo',
    'plugin:@next/next/recommended'
	],
	parserOptions: {
    tsconfigRootDir: __dirname
	},
	ignorePatterns: ["**/dist/**", "**/.eslintrc.js"],
}
