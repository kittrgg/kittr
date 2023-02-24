const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [`src/**/*.{js,ts,jsx,tsx}`],
	theme: {
		fontFamily: {
			sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
			serif: ["'Barlow Condensed'", ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: []
}
