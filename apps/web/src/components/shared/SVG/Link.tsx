import colors from "@Colors"

/** A link icon. Use stroke for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Link(props: any) {
	const { width = "100%", stroke = colors.white, dataCy, ...rest } = props

	return (
		<svg data-cy={dataCy} fill="none" viewBox="0 0 25 25" width={width} xmlns="http://www.w3.org/2000/svg" {...rest}>
			<g
				clipPath="url(#prefix__clip0_2570_14702)"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
			>
				<path d="M15.138 7.675h3a5 5 0 110 10h-3m-6 0h-3a5 5 0 110-10h3M8.138 12.675h8" />
			</g>
			<defs>
				<clipPath id="prefix__clip0_2570_14702">
					<path d="M0 0h24v24H0z" fill="#fff" transform="translate(.138 .675)" />
				</clipPath>
			</defs>
		</svg>
	)
}
