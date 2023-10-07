import colors from '@Colors';
import { useState } from 'react';

/** The Twitter Logo as an svg. Use fill for color. Defaults to white. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Twitter(props: any) {
	const [isHovered, setIsHovered] = useState(false);

	const {
		width = '100%',
		fill = colors.white,
		colorHover = colors.white,
		dataCy,
		...rest
	} = props;

	return (
		<svg
			data-cy={dataCy}
			fill="none"
			viewBox="0 0 79 64"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M78.6591 7.85518C75.7842 9.13312 72.6901 9.99513 69.4437 10.3809C72.7584 8.39652 75.3 5.25327 76.4985 1.5036C73.3981 3.34351 69.966 4.6786 66.31 5.39932C63.3842 2.28148 59.2139 0.332031 54.599 0.332031C45.7392 0.332031 38.5558 7.51546 38.5558 16.3769C38.5558 17.6326 38.697 18.8565 38.9717 20.0329C25.6367 19.363 13.813 12.9764 5.89934 3.2689C4.51822 5.63745 3.72764 8.39334 3.72764 11.3366C3.72764 16.9023 6.55974 21.814 10.865 24.6906C8.23614 24.6065 5.76123 23.8841 3.59747 22.6824C3.59588 22.7491 3.59588 22.8173 3.59588 22.8856C3.59588 30.658 9.12672 37.1413 16.4673 38.6177C15.1211 38.9828 13.7035 39.1797 12.2398 39.1797C11.2048 39.1797 10.1999 39.0797 9.22039 38.8908C11.2635 45.2646 17.188 49.9048 24.208 50.0334C18.7168 54.3371 11.8001 56.9025 4.28168 56.9025C2.98787 56.9025 1.70993 56.8263 0.454224 56.6771C7.55669 61.2316 15.9895 63.8859 25.0493 63.8859C54.5625 63.8859 70.6994 39.4384 70.6994 18.2358C70.6994 17.5405 70.6851 16.8468 70.655 16.1578C73.7887 13.9004 76.5096 11.073 78.6591 7.85518Z"
				fill={isHovered ? colorHover : fill}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				style={{ transition: '.1s' }}
			/>
		</svg>
	);
}
