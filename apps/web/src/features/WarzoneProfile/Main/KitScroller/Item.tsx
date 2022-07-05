import colors from "@Colors"
import SVG from "@Components/shared/SVG"
import { WarzoneKit, WarzoneKitBase } from "@kittr/prisma"
import { setActiveWeapon } from "@Redux/slices/displayr"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors"
import { useDispatch } from "@Redux/store"
import { useEffect, useRef } from "react"
import * as Styled from "./style"

interface Props {
	elem: WarzoneKit & {base: WarzoneKitBase}
}

const Item = ({ elem }: Props) => {
	const dispatch = useDispatch()
	const activeWeapon = useActiveWeapon()
	const itemRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		if (activeWeapon?.customTitle === elem.customTitle && itemRef.current) {
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
			onClick={() => dispatch(setActiveWeapon(elem as any))}
			data-cy={`slider-${elem.base.displayName.replace(/ /g, "-").replace("(", "-").replace(")", "-")}-${
				elem.customTitle?.replace(/ /g, "-") || "Primary"
			}`}
		>
			{elem.customTitle || elem.base.displayName}{" "}
			{elem.featured && <SVG.Star style={{ marginLeft: "4px" }} width="20px" fill={colors.gold} stroke="none" />}
		</Styled.Item>
	)
}

export default Item
