import colors from "@Colors"

/** A bottom of a box with an arrow pointing upwards out of it. Use stroke for color. Defaults to white. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Line = (props: any) => {
	const { width = "100%", stroke = colors.white, onClick, dataCy, ...rest } = props

	return (
		<svg
			width={width || "100%"}
			viewBox="0 0 516 5"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={onClick}
			data-cy={dataCy}
			{...rest}
		>
			<path d="M2.21289 2.58789H513.639" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
		</svg>
	)
}
