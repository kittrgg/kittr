import colors from '@Colors';

/** A list icon. Defaults to white. Use stroke for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function List(props: any) {
	const {
		width = '100%',
		stroke = colors.white,
		onClick,
		dataCy,
		...rest
	} = props;

	return (
		<svg
			data-cy={dataCy}
			fill="none"
			onClick={onClick}
			viewBox="0 0 31 22"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M2 2H29"
				stroke={stroke}
				strokeLinecap="round"
				strokeWidth="2.25"
			/>
			<path
				d="M2 20H24.5"
				stroke={stroke}
				strokeLinecap="round"
				strokeWidth="2.25"
			/>
			<path
				d="M2 11H16"
				stroke={stroke}
				strokeLinecap="round"
				strokeWidth="2.25"
			/>
		</svg>
	);
}
