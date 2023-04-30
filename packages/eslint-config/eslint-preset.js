var project = require.resolve(process.cwd(), 'tsconfig.json');

module.exports = {
	root: true,
	extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  	'plugin:@typescript-eslint/strict',
	],
	parserOptions: { project },
	ignorePatterns: ["**/dist/**", "**/eslintrc.js"],
}
