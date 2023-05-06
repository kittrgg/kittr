import colors from "@Colors"

/** A check mark. Use fill for color. Defaults to white. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Circle(props: any) {
	const { width = "100%", fill = colors.white, dataCy, ...rest } = props

	return (
		<svg
			data-cy={dataCy}
			fill="none"
			height={13}
			viewBox="0 0 13 13"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<circle cx="6.21314" cy="6.58766" fill={fill} r="6.1858" />
		</svg>
	)
}
