import colors from "@Colors"

/** A clipboard. Use stroke for color. Defaults to white. */
export const Clipboard = (props: any) => {
	const { width = "100%", stroke = colors.white, dataCy, ...rest } = props

	return (
		<svg width={width} data-cy={dataCy} viewBox="0 0 15 19" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10.6666 2.9585H12.25C12.6699 2.9585 13.0726 3.13409 13.3695 3.44665C13.6665 3.75921 13.8333 4.18314 13.8333 4.62516V16.2918C13.8333 16.7339 13.6665 17.1578 13.3695 17.4703C13.0726 17.7829 12.6699 17.9585 12.25 17.9585H2.74996C2.33003 17.9585 1.92731 17.7829 1.63037 17.4703C1.33344 17.1578 1.16663 16.7339 1.16663 16.2918V4.62516C1.16663 4.18314 1.33344 3.75921 1.63037 3.44665C1.92731 3.13409 2.33003 2.9585 2.74996 2.9585H4.33329"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.87504 1.29175H5.12504C4.68782 1.29175 4.33337 1.66484 4.33337 2.12508V3.79175C4.33337 4.25199 4.68782 4.62508 5.12504 4.62508H9.87504C10.3123 4.62508 10.6667 4.25199 10.6667 3.79175V2.12508C10.6667 1.66484 10.3123 1.29175 9.87504 1.29175Z"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
