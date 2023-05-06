import colors from "@Colors"

/** A placeholder avatar image for users who don't upload one. Use fill for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function EmptyAvatar(props: any) {
	const { width = "100%", fill = colors.white, dataCy, ...rest } = props

	return (
		<svg
			data-cy={dataCy}
			fill="none"
			height={34}
			viewBox="0 0 34 34"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M17.209.78C8.1.78.709 8.172.709 17.28s7.392 16.5 16.5 16.5 16.5-7.392 16.5-16.5S26.316.78 17.209.78zm0 4.95a4.943 4.943 0 014.95 4.95 4.943 4.943 0 01-4.95 4.95 4.943 4.943 0 01-4.95-4.95 4.943 4.943 0 014.95-4.95zm0 23.43a11.88 11.88 0 01-9.9-5.313c.049-3.284 6.6-5.082 9.9-5.082 3.283 0 9.85 1.798 9.9 5.082a11.88 11.88 0 01-9.9 5.313z"
				fill={fill}
			/>
		</svg>
	)
}
