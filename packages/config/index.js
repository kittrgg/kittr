module.exports = {
	extends: ["next", "prettier"],
	rules: {
		"@next/next/no-html-link-for-pages": "off",
		"@next/next/no-img-element": "off",
		"react/jsx-key": "off",
		"semi": ["warn", "never"]
	}
}
