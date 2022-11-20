import colors from "@Colors"

/** The Premium Tier diamond icon.
 *
 * Use fill for color.
 *
 * Use background color
 **/
export const PremiumWithCircle = (props: any) => {
	const { width = "100%", stroke = colors.white, backgroundColor = colors.premium, dataCy, ...rest } = props

	return (
		<svg width={width} data-cy={dataCy} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
			<circle cx={10.642} cy={10.976} r={10.148} fill={backgroundColor} />
			<path
				d="M5.346 9.395l3.01.62s4.282-.025 4.402 0c.12.027 3.178-.62 3.178-.62m-10.59 0l1.496-1.96h7.598l1.496 1.96m-10.59 0l3.353 5.598 1.858.865m5.379-6.463l-3.354 5.598-2.025.865M8.699 7.434l-.343 2.58 2.2 5.844m0 0l2.202-5.899-.343-2.525"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
