import colors from "@Colors"

/** A link icon. Use stroke for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Link = (props: any) => {
	const { width = "100%", stroke = colors.white, dataCy, ...rest } = props

	return (
		<svg width={width} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-cy={dataCy} {...rest}>
			<g
				clipPath="url(#prefix__clip0_2570_14702)"
				stroke={stroke}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M15.138 7.675h3a5 5 0 110 10h-3m-6 0h-3a5 5 0 110-10h3M8.138 12.675h8" />
			</g>
			<defs>
				<clipPath id="prefix__clip0_2570_14702">
					<path fill="#fff" transform="translate(.138 .675)" d="M0 0h24v24H0z" />
				</clipPath>
			</defs>
		</svg>
	)
}
