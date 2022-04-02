import { NonNullable } from "@Types/index"
import { DeserializeFullChannelProfileReturnType } from "@Services/orm"
import SVG from "@Components/shared/SVG"
import { useEffect, useRef } from "react"
import * as Styled from "./style"
import colors from "@Colors"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors"
import { setActiveWeapon } from "@Redux/slices/displayr"
import { useDispatch } from "@Redux/store"

interface Props {
	elem: NonNullable<DeserializeFullChannelProfileReturnType>["kits"][0]
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
			onClick={() => dispatch(setActiveWeapon(elem))}
			data-cy={`slider-${elem.kitBase.displayName.replace(/ /g, "-").replace("(", "-").replace(")", "-")}-${
				elem.customTitle?.replace(/ /g, "-") || "Primary"
			}`}
		>
			{elem.customTitle || elem.kitBase.displayName}{" "}
			{elem.featured && <SVG.Star style={{ marginLeft: "4px" }} width="20px" fill={colors.gold} stroke="none" />}
		</Styled.Item>
	)
}

export default Item
