module.exports = {
	extends: ["next", "prettier"],
	plugins: ["only-warn"],
	rules: {
		"@next/next/no-html-link-for-pages": "off",
		"@next/next/no-img-element": "off",
		"import/no-anonymous-default-export": 1,
		"react/no-unescaped-entities": 1,
		"react/jsx-key": "off",
		"no-unused-vars": 1,
		"semi": ["warn", "never"],
		"no-console": 1
	}
}