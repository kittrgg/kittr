import { useRef } from "react"
import colors from "@Colors"
import { getRandomNumFromRange } from "@Utils/helpers/getRandomNumFromRange"
import { useIsBrowser } from "@Hooks/useIsBrowser"

interface Props {
	size: string
	top: string
	left: string
}

const Block = ({ size, top, left }: Props) => (
		<div
			key={size + top + left}
			style={{
				position: "absolute",
				width: `${size}%`,
				height: 0,
				paddingTop: `${size}%`,
				top: `${top}%`,
				left: `${left}%`,
				borderRadius: "20px",
				backgroundColor: colors.white,
				opacity: 0.1,
				zIndex: 1
			}}
		/>
	)

/** Spawns squares for background art in randomly generated positions with randomly generated sizes. */
const BlockArt = ({ ...props }) => {
	const isBrowser = useIsBrowser()
	const blockCount = 15
	const blockCoordinates = useRef(isBrowser
			? [...Array(blockCount)].map((_) => ({
					size: getRandomNumFromRange(8, 20),
					top: getRandomNumFromRange(10, 90),
					left: getRandomNumFromRange(10, 90)
			  }))
			: [])

	return (
		<div
			style={{
				position: "absolute",
				inset: 0,
				overflow: "hidden"
			}}
		>
			{blockCoordinates.current.map((coords) => (
				<Block key={getRandomNumFromRange(-10000, 10000)} size={coords.size} top={coords.top} left={coords.left} />
			))}
		</div>
	)
}

export default BlockArt
