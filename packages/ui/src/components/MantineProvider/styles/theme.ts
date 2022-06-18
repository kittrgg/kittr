import { MantineThemeOverride } from "@mantine/core"
import { colors } from "./colors"

export const other = {
	colors: {
		white: "#ffffff"
	},
	spacing: {
		xxl: "3rem",
		xxxl: "4.5rem",
		xxxxl: "5.5rem"
	}
}

export const theme: MantineThemeOverride = {
	colorScheme: "light",
	fontFamilyMonospace: "Monaco, Courier, monospace",
	fontFamily: "Open Sans",
	headings: { fontFamily: "Josefin Sans, serif" },
	colors: {
		gray: colors.gray,
		teal: colors.teal,
		yellow: colors.yellow,
		navy: colors.navy,
		red: colors.red,
		green: colors.green
	},
	primaryColor: "teal",
	other
}
