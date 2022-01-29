import SVG from "@Components/shared/SVG"
import { useEffect, useRef } from "react"
import * as Styled from "./style"
import colors from "@Colors"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors"
import { setActiveWeapon } from "@Redux/slices/displayr"
import { useDispatch } from "@Redux/store"

interface Props {
	elem: IKit
}

const Item = ({ elem }: Props) => {
	const dispatch = useDispatch()
	const activeWeapon = useActiveWeapon()
	const itemRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		if (activeWeapon?.userData?.customTitle === elem.userData.customTitle && itemRef.current) {
			itemRef.current.scrollIntoView({
				inline: "center",
				block: "nearest"
			})
		}
	}, [activeWeapon])

	return (
		<Styled.Item
			ref={itemRef}
			active={activeWeapon?.userData?.customTitle === elem.userData.customTitle}
			onClick={() => dispatch(setActiveWeapon(elem))}
			data-cy={`slider-${elem.base.displayName.replace(/ /g, "-").replace("(", "-").replace(")", "-")}-${
				elem.userData.customTitle.replace(/ /g, "-") || "Primary"
			}`}
		>
			{elem.userData.customTitle || elem.base.displayName}{" "}
			{elem.userData.featured && (
				<SVG.Star style={{ marginLeft: "4px" }} width="20px" fill={colors.gold} stroke="none" />
			)}
		</Styled.Item>
	)
}

export default Item
