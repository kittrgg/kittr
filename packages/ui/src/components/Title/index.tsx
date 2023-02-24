import { cn } from "../../utils/cn"
import {
	Text as MantineTitle,
	TitleProps as MantineTitleProps
} from "@mantine/core"
import { ReactNode } from "react"

const fontFamily = "Barlow Condensed, serif"

export const TITLE_PRESETS = {
	d1: {
		fontSize: "4.5rem",
		fontWeight: 900,
		fontFamily,
		letterSpacing: ".375rem"
	},
	d2: {
		fontSize: "3.5rem",
		fontWeight: 600,
		fontFamily,
		letterSpacing: ".3rem"
	},
	h1: {
		fontFamily,
		fontSize: "2.25rem",
		fontWeight: 900,
		letterSpacing: ".1875rem"
	},
	h2: {
		fontFamily,
		fontSize: "2rem",
		fontWeight: 700,
		letterSpacing: ".166666666667rem"
	},
	h3: {
		fontSize: "1.75rem",
		fontWeight: 700,
		fontFamily,
		letterSpacing: ".145rem"
	},
	h4: {
		fontSize: "1.5rem",
		fontWeight: 600,
		fontFamily,
		letterSpacing: ".125rem"
	},
	h5: {
		fontSize: "1.25rem",
		fontWeight: 600,
		fontFamily,
		letterSpacing: ".105rem"
	},
	h6: {
		fontSize: "1rem",
		fontWeight: 600,
		fontFamily,
		letterSpacing: ".08333333rem"
	}
}

export interface TitleProps extends MantineTitleProps {
	/** Use a preset defined styling property. */
	preset?: keyof typeof TITLE_PRESETS
}

export const Title = ({ preset, children, sx, ...props }: TitleProps) => {
	const styles = preset ? TITLE_PRESETS[preset] : {}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { size, ...rest } = props

	return (
		<MantineTitle sx={{ ...styles, ...sx }} {...rest}>
			{children}
		</MantineTitle>
	)
}

export interface NewTitleProps {
	className?: string
	order: 1 | 2 | 3 | 4 | 5 | 6
	children: ReactNode
}

export const NewTitle = ({ className, children, order }: NewTitleProps) => {
	if (order === 1) {
		return (
			<h1
				className={cn(
					"font-sans scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
					className
				)}
			>
				{children}
			</h1>
		)
	}

	if (order === 2) {
		return (
			<h2
				className={cn(
					"font-sans mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700",
					className
				)}
			>
				{children}
			</h2>
		)
	}

	return null
}
