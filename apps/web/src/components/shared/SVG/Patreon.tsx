import colors from "@Colors"

/** The Patreon Logo as an svg. Use fill for color. Defaults to white. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Patreon = (props: any) => {
	const { width = "100%", fill = colors.white, dataCy, ...rest } = props

	return (
		<svg width={width} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-cy={dataCy} {...rest}>
			<path
				d="M12.9593 0.896973C8.9893 0.896973 5.7593 3.96547 5.7593 7.73697C5.7593 11.4974 8.9893 14.5556 12.9593 14.5556C16.9176 14.5556 20.1376 11.4966 20.1376 7.73697C20.1376 3.96547 16.9176 0.896973 12.9593 0.896973ZM0.140137 19.1156H3.6568V0.896973H0.140137"
				fill={fill}
			/>
		</svg>
	)
}
