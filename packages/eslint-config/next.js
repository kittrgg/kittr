
module.exports = {
	root: true,
	extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  	'plugin:@typescript-eslint/strict',
		'turbo',
    "next"
	],
	parserOptions: {
    tsconfigRootDir: __dirname
	},
	ignorePatterns: ["**/dist/**", "**/.eslintrc.js"],
}
