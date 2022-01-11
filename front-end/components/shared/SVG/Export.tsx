import colors from "@Colors"

/** A bottom of a box with an arrow pointing upwards out of it. Use stroke for color. */
export const Export = (props: any) => {
	const { width = "100%", stroke = colors.white, onClick, dataCy, ...rest } = props

	return (
		<svg
			width={width || "100%"}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={onClick}
			data-cy={dataCy}
			{...rest}
		>
			<path
				d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"
				stroke={stroke}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
