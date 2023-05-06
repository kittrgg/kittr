import colors from "@Colors"
import SVG from "@Components/shared/SVG"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors"
import type { WarzoneKit, WarzoneKitBase } from "@kittr/prisma"
import { useEffect, useRef } from "react"
import * as Styled from "./style"

interface Props {
	elem: WarzoneKit & { base: WarzoneKitBase }
}

function Item({ elem }: Props) {
	const activeWeapon = useActiveWeapon()
	const itemRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		if (activeWeapon.customTitle === elem.customTitle && itemRef.current) {
			itemRef.current.scrollIntoView({
				inline: "center",
				block: "nearest"
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeWeapon])

	return (
		<Styled.Item
			ref={itemRef}
			active={activeWeapon?.customTitle === elem.customTitle}
			// onClick={() => dispatch(setActiveWeapon(elem as any))}
			data-cy={`slider-${elem.base.displayName.replace(/ /g, "-").replace("(", "-").replace(")", "-")}-${
				elem.customTitle?.replace(/ /g, "-") || "Primary"
			}`}
		>
			{elem.customTitle || elem.base.displayName}{" "}
			{elem.featured ? <SVG.Star fill={colors.gold} stroke="none" style={{ marginLeft: "4px" }} width="20px" /> : null}
		</Styled.Item>
	)
}

export default Item
