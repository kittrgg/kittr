/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ["next", "plugin:prettier/recommended", "turbo"],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
		project: ["./apps/*/tsconfig.json", "./packages/*/tsconfig.json"],
	},
	settings: {
		next: {
			rootDir: ["apps/*/", "packages/*/"],
		},
	},
	rules: {
		"react/no-unescaped-entities": "off",
		"no-unused-vars": "error",
		"@typescript-eslint/explicit-function-return-type": "warn",
		"@next/next/no-img-element": "off",
		"@next/next/no-html-link-for-pages": "off",
		"jsx-a11y/role-supports-aria-props": "off", // @see https://github.com/vercel/next.js/issues/27989#issuecomment-897638654
		"react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
		"react/self-closing-comp": ["error", { component: true, html: true }],
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			extends: ["plugin:@typescript-eslint/recommended"],
			plugins: ["@typescript-eslint"],
			parser: "@typescript-eslint/parser",
			overrides: [
				{
					files: ["playwright/**/*.{tsx,ts}"],
					rules: {
						"no-undef": "off",
					},
				},
			],
		},
		{
			files: ["playwright/**/*.{js,jsx}"],
			rules: {
				"no-undef": "off",
				"react/jsx-quotes": [2, "prefer-double"],
				"@typescript-eslint/explicit-function-return-type": "warn",
			},
		},
	],
}
