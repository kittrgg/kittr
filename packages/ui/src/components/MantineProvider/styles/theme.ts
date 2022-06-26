import { CSSObject, MantineTheme, MantineThemeOverride } from "@mantine/core"
import { gray } from "./colors/gray"
import { red } from "./colors/red"

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
	colorScheme: "dark",
	fontFamilyMonospace: "Monaco, Courier, monospace",
	fontFamily: "Montserrat",
	headings: { fontFamily: "Barlow Condensed, serif" },
	other,
	colors: {
		brand: gray,
		red: red
	},
	primaryColor: "brand"
}

export const themeStyles: Record<
	string,
	| Record<string, CSSObject>
	| ((theme: MantineTheme) => Record<string, CSSObject>)
> = {
	Accordion: (theme: MantineTheme) => ({
		control: {
			borderRadius: theme.radius.lg
		},
		item: {
			borderBottom: "none"
		}
	}),
	Text: {
		root: {
			"lineHeight": "2rem",
			"& > a": {
				color: "white"
			}
		}
	},
	Button: (theme: MantineTheme) => ({
		outline: {
			color: "white",
			borderColor: "white"
		}
	}),
	TextInput: (theme: MantineTheme) => ({
		input: {}
	})
}
