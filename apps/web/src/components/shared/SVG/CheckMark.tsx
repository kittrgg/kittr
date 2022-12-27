import colors from "@Colors"

/** A check mark. Use stroke for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CheckMark = (props: any) => {
	const { width = "100%", stroke = colors.white, dataCy, ...rest } = props

	return (
		<svg
			width={width}
			height={13}
			viewBox="0 0 19 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			data-cy={dataCy}
			{...rest}
		>
			<path d="M17.48 1l-11 11-5-5" stroke={stroke} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}
