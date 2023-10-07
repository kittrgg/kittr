import colors from '@Colors';

/** A bottom of a box with an arrow pointing upwards out of it. Use stroke for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Export(props: any) {
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
			viewBox="0 0 24 24"
			width={width || '100%'}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
		</svg>
	);
}
