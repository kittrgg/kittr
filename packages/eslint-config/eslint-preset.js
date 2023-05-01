module.exports = {
	root: true,
	extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  	'plugin:@typescript-eslint/strict',
	],
	parserOptions: { project: 'tsconfig.json'},
	ignorePatterns: ["**/dist/**", "**/eslintrc.js"],
}
