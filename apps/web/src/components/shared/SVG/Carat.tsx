import colors from '@Colors';

/** Arrow without a tail. Defaults position is pointing up. Use fill for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Carat(props: any) {
	const { width = '100%', fill = colors.white, dataCy, ...rest } = props;

	return (
		<svg
			data-cy={dataCy}
			fill="none"
			height={11}
			viewBox="0 0 18 11"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M2.46 10.09L8.778 3.24l6.32 6.849c.211.229.498.357.796.357.3 0 .586-.128.797-.357.211-.23.33-.541.33-.865 0-.325-.119-.636-.33-.866L9.502.553A.989.989 0 008.78.23c-.271 0-.531.116-.724.323L.865 8.36c-.21.23-.328.541-.328.866 0 .324.118.635.328.865.212.229.499.357.797.357.299 0 .586-.128.797-.357z"
				fill={fill}
			/>
		</svg>
	);
}
