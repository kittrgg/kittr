import colors from "@Colors"

/** A list icon. Defaults to white. Use stroke for color. */
export const List = (props: any) => {
	const { width = "100%", stroke = colors.white, onClick, dataCy, ...rest } = props

	return (
		<svg
			width={width}
			onClick={onClick}
			data-cy={dataCy}
			viewBox="0 0 31 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path d="M2 2H29" stroke={stroke} strokeWidth="2.25" strokeLinecap="round" />
			<path d="M2 20H24.5" stroke={stroke} strokeWidth="2.25" strokeLinecap="round" />
			<path d="M2 11H16" stroke={stroke} strokeWidth="2.25" strokeLinecap="round" />
		</svg>
	)
}
