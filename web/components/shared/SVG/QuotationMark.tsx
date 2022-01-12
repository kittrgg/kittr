import colors from "@Colors"

/** A quotation mark to use for visuals. Use fill for color. Defaults to colors.white. */
export const QuotationMark = (props: any) => {
	const { width = "100%", fill = colors.white, dataCy, ...rest } = props

	return (
		<svg width={width} viewBox="0 0 51 34" fill="none" xmlns="http://www.w3.org/2000/svg" data-cy={dataCy} {...rest}>
			<path
				d="M2.16006 33.244C1.58406 33.244 1.15206 33.1 0.864058 32.812C0.576058 32.428 0.528058 31.9 0.720058 31.228L10.8001 2.13995C11.0881 1.17995 11.7121 0.699951 12.6721 0.699951H24.7681C26.0161 0.699951 26.4961 1.32395 26.2081 2.57195L20.0161 31.66C19.8241 32.716 19.2001 33.244 18.1441 33.244H2.16006ZM26.3521 33.244C25.7761 33.244 25.3441 33.1 25.0561 32.812C24.8641 32.428 24.8641 31.9 25.0561 31.228L34.8481 2.13995C35.1361 1.17995 35.7601 0.699951 36.7201 0.699951H48.8161C50.0641 0.699951 50.5441 1.32395 50.2561 2.57195L44.3521 31.66C44.1601 32.716 43.5361 33.244 42.4801 33.244H26.3521Z"
				fill={fill}
			/>
		</svg>
	)
}
