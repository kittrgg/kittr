import colors from '@Colors';

/** Arrow with a tail. Defaults position is pointing up. Use stroke for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Arrow(props: any) {
	const { width = '100%', stroke = colors.white, dataCy, ...rest } = props;

	return (
		<svg
			data-cy={dataCy}
			fill="none"
			viewBox="0 0 16 16"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M7.987 15.5v-14M.987 8.5l7-7 7 7"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
			/>
		</svg>
	);
}
