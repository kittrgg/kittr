import { IKit } from "@kittr/types"
import { useState, useEffect, useRef } from "react"
import ScrollContainer from "react-indiana-drag-scroll"
import * as Styled from "./style"
import Item from "./Item"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors"

interface Props {
	availableKits: IKit[]
}

const KitScroller = ({ availableKits }: Props) => {
	const activeWeapon = useActiveWeapon()
	const [mask, setMask] = useState<"left" | "right" | "both" | "none">("left")
	const containerRef = useRef<HTMLDivElement>(null)

	const matchedBase = availableKits
		.filter((elem: IKit) => elem.base.displayName === activeWeapon?.base?.displayName)
		.sort((a, b) => {
			if (a.userData.customTitle < b.userData.customTitle) return -1
			if (a.userData.customTitle > b.userData.customTitle) return 1
			return 0
		})

	useEffect(() => {
		if (containerRef.current) {
			const { scrollLeft, clientWidth, scrollWidth } = containerRef.current
			if (scrollLeft + clientWidth === scrollWidth && scrollLeft === 0) {
				return setMask("none")
			}
		}
	}, [activeWeapon])

	// This is needed because dismounting the ref can cause problems...Can this be resolved?
	if (matchedBase.length === 1)
		return <ScrollContainer innerRef={containerRef} style={{ display: "none", width: "0", height: "0" }} />

	return (
		<ScrollContainer
			innerRef={containerRef}
			onScroll={() => {
				if (containerRef.current) {
					const position = containerRef.current.scrollLeft
					const clientWidth = containerRef.current.clientWidth
					const maxScroll = containerRef.current.scrollWidth

					if (position === 0) {
						return setMask("right")
					}

					if (position + clientWidth === maxScroll) {
						return setMask("left")
					}

					setMask("both")
				}
			}}
			horizontal
			vertical={false}
			hideScrollbars
			style={{
				height: "36px",
				cursor: "grab",
				WebkitMaskImage:
					mask === "right"
						? "linear-gradient(to right, black 75%, transparent 100%)"
						: mask === "left"
						? "linear-gradient(to left, black 25%, transparent 100%)"
						: mask === "both"
						? "linear-gradient(to left, transparent 0%, black 25%, black 75%, transparent 100%)"
						: "",
				maskImage:
					mask === "right"
						? "linear-gradient(to right, black 75%, transparent 100%)"
						: mask === "left"
						? "linear-gradient(to left, black 25%, transparent 100%)"
						: mask === "both"
						? "linear-gradient(to left, transparent 0%, black 25%, black 75%, transparent 100%)"
						: ""
			}}
		>
			<Styled.Wrapper>
				{matchedBase
					.sort((a, b) => Number(b.userData.featured) - Number(a.userData.featured))
					.map((elem: IKit) => {
						return <Item key={elem._id} elem={elem} />
					})}
			</Styled.Wrapper>
		</ScrollContainer>
	)
}

export default KitScroller
