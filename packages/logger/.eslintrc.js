module.exports = {
	...require("@kittr/config/eslint/common"),
	ignorePatterns: [
		...require("@kittr/config/eslint/common").ignorePatterns,
		"/nextjs",
		"/node"
	]
}
