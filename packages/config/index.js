module.exports = {
	extends: ["next", "prettier"],
	rules: {
		"@next/next/no-html-link-for-pages": "off",
		"@next/next/no-img-element": "off",
		"import/no-anonymous-default-export": 1,
		"react/no-unescaped-entities": 1,
		"react/jsx-key": "off",
		"semi": ["warn", "never"],
		"no-console": 1
	}
}
