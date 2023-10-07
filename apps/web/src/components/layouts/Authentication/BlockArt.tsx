import colors from '@Colors';
import { useIsBrowser } from '@Hooks/useIsBrowser';
import { getRandomNumFromRange } from '@Utils/helpers/getRandomNumFromRange';
import { useRef } from 'react';

interface Props {
	size: string;
	top: string;
	left: string;
}

function Block({ size, top, left }: Props) {
	return (
		<div
			key={size + top + left}
			style={{
				position: 'absolute',
				width: `${size}%`,
				height: 0,
				paddingTop: `${size}%`,
				top: `${top}%`,
				left: `${left}%`,
				borderRadius: '20px',
				backgroundColor: colors.white,
				opacity: 0.1,
				zIndex: 1,
			}}
		/>
	);
}

/** Spawns squares for background art in randomly generated positions with randomly generated sizes. */
function BlockArt() {
	const isBrowser = useIsBrowser();
	const blockCount = 15;
	const blockCoordinates = useRef(
		isBrowser
			? [...Array(blockCount)].map(() => ({
					size: getRandomNumFromRange(8, 20),
					top: getRandomNumFromRange(10, 90),
					left: getRandomNumFromRange(10, 90),
			  }))
			: [],
	);

	return (
		<div
			style={{
				position: 'absolute',
				inset: 0,
				overflow: 'hidden',
			}}
		>
			{blockCoordinates.current.map((coords) => (
				<Block
					key={getRandomNumFromRange(-10000, 10000)}
					left={coords.left}
					size={coords.size}
					top={coords.top}
				/>
			))}
		</div>
	);
}

export default BlockArt;
