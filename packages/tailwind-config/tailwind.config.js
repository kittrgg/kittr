const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [`src/**/*.{js,ts,jsx,tsx}`],
	theme: {
		fontFamily: {
			sans: ["'Barlow Condensed'", ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: []
}
