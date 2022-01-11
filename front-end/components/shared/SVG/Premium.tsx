import colors from "@Colors"

/** The Premium Tier diamond icon. Use fill for color. */
export const Premium = (props: any) => {
	const { width = "100%", stroke = colors.white, dataCy, ...rest } = props

	return (
		<svg width={width} viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-cy={dataCy} {...rest}>
			<path
				d="M0.753906 5.22318L7.5169 6.61742C7.5169 6.61742 17.139 6.55886 17.4095 6.61742C17.68 6.67598 24.5489 5.22318 24.5489 5.22318M0.753906 5.22318L4.11588 0.817383H21.187L24.5489 5.22318M0.753906 5.22318L8.28931 17.802L12.4627 19.7437M24.5489 5.22318L17.0135 17.802L12.4627 19.7437M8.28931 0.817383L7.5169 6.61463L12.4627 19.7437M12.4627 19.7437L17.4095 6.49101L16.6371 0.817383"
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
