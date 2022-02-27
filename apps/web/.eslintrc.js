module.exports = {
	...require("@kittr/config/eslint/next.js"),
	rules: {
		"@next/next/no-img-element": 0,
		"react/no-unescaped-entities": 0,
		"no-unused-vars": [
			"warn",
			{
				args: "none"
			}
		]
	}
}
