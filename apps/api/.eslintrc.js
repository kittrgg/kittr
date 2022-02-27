module.exports = {
	...require("@kittr/config/eslint/common.js"),
	rules: {
		...require("@kittr/config/eslint/common.js").rules,
		"import/first": 0
	}
}
