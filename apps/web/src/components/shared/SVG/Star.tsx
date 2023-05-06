import colors from "@Colors"

/** It's a star. Accepts both stroke and fill for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Star(props: any) {
	const { width = "100%", stroke = colors.white, fill = "transparent", dataCy, ...rest } = props

	return (
		<svg
			data-cy={dataCy}
			fill="none"
			height={17}
			viewBox="0 0 18 17"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M8.483 14.582a1 1 0 011.034 0l3.634 2.193c.757.458 1.691-.221 1.49-1.083l-.964-4.134a1 1 0 01.32-.983l3.212-2.783c.668-.58.31-1.678-.57-1.752L12.41 5.68a1 1 0 01-.836-.606L9.92 1.172c-.345-.813-1.497-.813-1.842 0L6.425 5.075a1 1 0 01-.836.606l-4.227.359C.48 6.114.122 7.213.792 7.792l3.212 2.783a1 1 0 01.319.983l-.965 4.134c-.2.861.734 1.54 1.491 1.083l3.634-2.193z"
				fill={fill}
				stroke={stroke}
				strokeWidth="2"
			/>
		</svg>
	)
}
