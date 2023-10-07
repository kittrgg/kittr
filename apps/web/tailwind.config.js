// @ts-ignore
const sharedConfig = require('@kittr/tailwind/index.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{jsx,tsx}',
		'../../packages/ui/src/new/**/**.{jsx,tsx}',
	],
	presets: [sharedConfig],
};
