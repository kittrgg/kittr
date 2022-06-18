import React from "react"
import { Text as MantineText, SharedTextProps } from "@mantine/core"
import { useMantineTheme } from "@mantine/core"
import { ReactNode } from "react"

const fontFamily = "Montserrat, sans-serif"

export const TEXT_PRESETS = {
	"xxs": {
		fontSize: ".625rem",
		fontFamily,
		letterSpacing: "0.05rem"
	},
	"xxs semibold": {
		fontSize: ".625rem",
		fontFamily,
		fontWeight: 600,
		letterSpacing: "0.05rem"
	},
	"xs": {
		fontSize: ".75rem",
		fontFamily,
		letterSpacing: "0.05rem"
	},
	"xs italic": {
		fontSize: ".75rem",
		fontFamily,
		letterSpacing: "0.05rem",
		fontStyle: "italic"
	},
	"xs semibold": {
		fontSize: ".75rem",
		fontFamily,
		fontWeight: 600,
		letterSpacing: "0.05rem"
	},
	"xs bold": {
		fontSize: ".75rem",
		fontFamily,
		fontWeight: 700,
		letterSpacing: "0.05rem"
	},
	"sm": {
		fontSize: ".875rem",
		fontFamily,
		lineHeight: "175%"
	},
	"sm italic": {
		fontSize: ".875rem",
		fontFamily,
		fontStyle: "italic"
	},
	"sm semibold": {
		fontSize: ".875rem",
		fontFamily,
		fontWeight: 600
	},
	"sm bold": {
		fontSize: ".875rem",
		fontFamily,
		fontWeight: 700
	},
	"md": {
		fontSize: "1rem",
		fontFamily
	},
	"md italic": {
		fontSize: "1rem",
		fontFamily,
		fontStyle: "italic"
	},
	"md semibold": {
		fontSize: "1rem",
		fontFamily,
		fontWeight: 600
	},
	"md bold": {
		fontSize: "1rem",
		fontFamily,
		fontWeight: 700
	},
	"lg": {
		fontSize: "1.125rem",
		fontFamily
	},
	"lg italic": {
		fontSize: "1.125rem",
		fontFamily,
		fontStyle: "italic"
	},
	"lg semibold": {
		fontSize: "1.125rem",
		fontFamily,
		fontWeight: 600
	},
	"lg bold": {
		fontSize: "1.125rem",
		fontFamily,
		fontWeight: 700
	},
	"xl": {
		fontSize: "1.25rem",
		fontFamily
	},
	"xl italic": {
		fontSize: "1.25rem",
		fontFamily,
		fontStyle: "italic"
	},
	"xl semibold": {
		fontSize: "1.25rem",
		fontFamily,
		fontWeight: 600
	},
	"xl bold": {
		fontSize: "1.25rem",
		fontFamily,
		fontWeight: 700
	}
}

interface Props extends SharedTextProps {
	/** Use a preset of defined properties. */
	preset?: keyof typeof TEXT_PRESETS
	children: ReactNode
}

export const Text = ({ preset, children, ...props }: Props) => {
	const styles = preset ? TEXT_PRESETS[preset] : {}
	const { colors } = useMantineTheme()

	return (
		// <MantineText
		// 	sx={{ color: props.color || colors.navy[9], ...styles, ...props.sx }}
		// 	{...props}
		// >
		<MantineText sx={{ ...styles, ...props.sx }} {...props}>
			{children}
		</MantineText>
	)
}
