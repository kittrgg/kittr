import { Text as MantineText, SharedTextProps } from "@mantine/core"
import { useMantineTheme } from "@mantine/core"
import { ReactNode } from "react"

export const TEXT_PRESETS = {
	"xxs": {
		fontSize: ".625rem",
		fontFamily: "Open Sans, serif",
		letterSpacing: "0.05rem"
	},
	"xxs semibold": {
		fontSize: ".625rem",
		fontFamily: "Open Sans, serif",
		fontWeight: 600,
		letterSpacing: "0.05rem"
	},
	"xs": {
		fontSize: ".75rem",
		fontFamily: "Open Sans, serif",
		letterSpacing: "0.05rem"
	},
	"xs italic": {
		fontSize: ".75rem",
		fontFamily: "Open Sans, serif",
		letterSpacing: "0.05rem",
		fontStyle: "italic"
	},
	"xs semibold": {
		fontSize: ".75rem",
		fontFamily: "Open Sans, serif",
		fontWeight: 600,
		letterSpacing: "0.05rem"
	},
	"xs bold": {
		fontSize: ".75rem",
		fontFamily: "Open Sans, serif",
		fontWeight: 700,
		letterSpacing: "0.05rem"
	},
	"sm": {
		fontSize: ".875rem",
		fontFamily: "Open Sans, serif",
		lineHeight: "175%"
	},
	"sm italic": {
		fontSize: ".875rem",
		fontFamily: "Open Sans, serif",
		fontStyle: "italic"
	},
	"sm semibold": {
		fontSize: ".875rem",
		fontFamily: "Open Sans, serif",
		fontWeight: 600
	},
	"sm bold": {
		fontSize: ".875rem",
		fontFamily: "Open Sans, serif",
		fontWeight: 700
	},
	"md": {
		fontSize: "1rem",
		fontFamily: "Open Sans, serif"
	},
	"md italic": {
		fontSize: "1rem",
		fontFamily: "Open Sans, serif",
		fontStyle: "italic"
	},
	"md semibold": {
		fontSize: "1rem",
		fontFamily: "Open Sans, serif",
		fontWeight: 600
	},
	"md bold": {
		fontSize: "1rem",
		fontFamily: "Open Sans, serif",
		fontWeight: 700
	},
	"lg": {
		fontSize: "1.125rem",
		fontFamily: "Open Sans, serif"
	},
	"lg italic": {
		fontSize: "1.125rem",
		fontFamily: "Open Sans, serif",
		fontStyle: "italic"
	},
	"lg semibold": {
		fontSize: "1.125rem",
		fontFamily: "Open Sans, serif",
		fontWeight: 600
	},
	"lg bold": {
		fontSize: "1.125rem",
		fontFamily: "Open Sans, serif",
		fontWeight: 700
	},
	"xl": {
		fontSize: "1.25rem",
		fontFamily: "Open Sans, serif"
	},
	"xl italic": {
		fontSize: "1.25rem",
		fontFamily: "Open Sans, serif",
		fontStyle: "italic"
	},
	"xl semibold": {
		fontSize: "1.25rem",
		fontFamily: "Open Sans, serif",
		fontWeight: 600
	},
	"xl bold": {
		fontSize: "1.25rem",
		fontFamily: "Open Sans, serif",
		fontWeight: 700
	}
}

interface Props extends SharedTextProps {
	/** Use a preset set of defined properties. */
	preset?: keyof typeof TEXT_PRESETS
	children: ReactNode
}

export const Text = ({ preset, children, ...props }: Props) => {
	const styles = preset ? TEXT_PRESETS[preset] : {}
	const { colors } = useMantineTheme()

	return (
		<MantineText
			sx={{ color: props.color || colors.navy[9], ...styles, ...props.sx }}
			{...props}
		>
			{children}
		</MantineText>
	)
}
