import colors from "@Colors"

/** Arrow with a tail. Defaults position is pointing up. Use stroke for color. */
export const Arrow = (props: any) => {
	const { width = "100%", stroke = colors.white, dataCy, ...rest } = props

	return (
		<svg width={width} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-cy={dataCy} {...rest}>
			<path
				d="M7.987 15.5v-14M.987 8.5l7-7 7 7"
				stroke={stroke}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
