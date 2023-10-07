import colors from '@Colors';

/** A pencil icon. Use fill for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Pencil(props: any) {
	const { width = '100%', fill = colors.white, dataCy, ...rest } = props;

	return (
		<svg
			data-cy={dataCy}
			fill="none"
			height={17}
			viewBox="0 0 18 17"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M1.223 12.57a1.5 1.5 0 00-.44 1.06v2.262a.5.5 0 00.5.5h2.263a1.5 1.5 0 001.06-.44L14.15 6.41l-3.383-3.383-9.543 9.543zm15.534-8.768a.904.904 0 000-1.277L14.65.42a.904.904 0 00-1.277 0l-1.65 1.65 3.383 3.384 1.65-1.651z"
				fill={fill}
			/>
		</svg>
	);
}
