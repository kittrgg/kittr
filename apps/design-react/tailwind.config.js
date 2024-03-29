const sharedConfig = require('@kittr/tailwind/index.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'../../packages/ui/src/**/**.{js,ts,jsx,tsx,mdx}',
	],
	presets: [sharedConfig],
};
