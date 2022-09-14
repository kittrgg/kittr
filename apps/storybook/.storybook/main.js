module.exports = {
	stories: [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		"@react-theming/storybook-addon",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions"
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-vite"
	},
	features: {
		storyStoreV7: true
	}
}
