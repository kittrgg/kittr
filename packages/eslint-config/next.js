const {rules} = require('./utils/rules')

// See: https://github.com/eslint/eslint/issues/3458
// @ts-expect-error No types available
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
    '@vercel/style-guide/eslint/typescript',
	].map((config) => require.resolve(config)),
	parserOptions: {
        tsconfigRootDir: `${__dirname}/tsconfig.json`
	},
    rules,
	ignorePatterns: ["**/dist/**", "**/.eslintrc.js"],
}
