import colors from "@Colors"

/** A check mark. Use fill for color. Defaults to white. */
export const Circle = (props: any) => {
	const { width = "100%", fill = colors.white, dataCy, ...rest } = props

	return (
		<svg
			width={width}
			height={13}
			viewBox="0 0 13 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			data-cy={dataCy}
			{...rest}
		>
			<circle cx="6.21314" cy="6.58766" r="6.1858" fill={fill} />
		</svg>
	)
}
