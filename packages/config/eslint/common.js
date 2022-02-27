module.exports = {
	extends: ["airbnb", "plugin:jest/recommended"],
	parser: "@typescript-eslint/parser",
	plugins: ["jest", "@typescript-eslint", "only-warn"],
	env: { "jest/globals": true },
	rules: {
		"semi": 0,
		"comma-dangle": 0,
		"no-tabs": 0,
		"indent": ["error", "tab"],
		"quotes": ["error", "double"],
		"no-underscore-dangle": 0,
		"import/extensions": 0,
		"max-len": 0,
		"no-console": 0,
		"import/no-unresolved": 0,
		"import/prefer-default-export": 0,
		"import/no-extraneous-dependencies": 0,
		"operator-linebreak": 0,
		"quote-props": 0,
		"linebreak-style": 0,
		"object-curly-newline": 0
	},
	ignorePatterns: [
		"**/*.js",
		"node_modules",
		".turbo",
		"dist",
		"build",
		"coverage"
	]
}
