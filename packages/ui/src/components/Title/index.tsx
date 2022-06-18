import React from "react"
import {
	Text as MantineTitle,
	TitleProps,
	useMantineTheme
} from "@mantine/core"

export const TITLE_PRESETS = {
	d1: {
		fontSize: "2.625rem",
		fontWeight: 600,
		fontFamily: "Josefin Sans, serif"
	},
	d2: {
		fontSize: "1.75rem",
		fontWeight: 600,
		fontFamily: "Josefin Sans, serif"
	},
	h1: {
		fontSize: "2.125rem",
		fontWeight: 600,
		fontFamily: "Josefin Sans, serif"
	},
	h2: {
		fontSize: "1.625rem",
		fontWeight: 700,
		fontFamily: "Josefin Sans, serif"
	},
	h3: {
		fontSize: "1.375rem",
		fontWeight: 700,
		fontFamily: "Josefin Sans, serif"
	},
	h4: {
		fontSize: "1.25rem",
		fontWeight: 700,
		fontFamily: "Josefin Sans, serif"
	},
	h5: {
		fontSize: "1.125rem",
		fontWeight: 700,
		fontFamily: "Josefin Sans, serif"
	},
	h6: {
		fontSize: "1rem",
		fontWeight: 700,
		fontFamily: "Josefin Sans, serif"
	}
}

interface Props extends TitleProps {
	/** Use a preset set of defined styling properties. */
	preset?: keyof typeof TITLE_PRESETS
}

export const Title = ({ preset, children, sx, ...props }: Props) => {
	const styles = preset ? TITLE_PRESETS[preset] : {}
	const { colors } = useMantineTheme()

	return (
		<MantineTitle sx={{ color: colors.navy[9], ...styles, ...sx }} {...props}>
			{children}
		</MantineTitle>
	)
}
