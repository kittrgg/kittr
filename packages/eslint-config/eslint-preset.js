module.exports = {
	root: true,
	extends: [
		require.resolve("@vercel/style-guide/eslint/node"),
		require.resolve("@vercel/style-guide/eslint/typescript")
	],
	ignorePatterns: ["**/dist/**", "**node_modules", "**/eslintrc.js"],
	overrides: [
		{
			files: ["**/*.test.ts"],
			extends: [require.resolve("@vercel/style-guide/eslint/jest")]
		}
	]
}
