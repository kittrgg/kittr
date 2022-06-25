import styled from "styled-components"

import colors from "@Colors"
import { SVG } from "@Components/shared"
import { useAllKitOptions } from "@Hooks/api/useAllKitOptions"
import { Kit, KitBase, KitOption } from "@kittr/prisma"
import { setActiveKit, setModal } from "@Redux/slices/dashboard"
import { useActiveKit } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"

interface Props {
	favorite?: true
	kit: Kit & { base: KitBase; options: KitOption[] }
}

const KitButton = ({ favorite, kit }: Props) => {
	const dispatch = useDispatch()
	const activeKit = useActiveKit()
	const { customTitle, base } = kit
	const { data: allOptions, isLoading } = useAllKitOptions()
	const {data: options, isLoading} = useKitOption({baseId})
	const {data: options, isLoading} = useKitOption({baseId, slot})

	let title = ""

	if (customTitle) {
		title = `${base.displayName} (${customTitle})`
	} else {
		title = `${base.displayName}`
	}

	if (isLoading) return null

	return (
		<Button
			key={kit.id}
			active={activeKit.id == kit.id}
			onClick={() =>	{
				dispatch(
					setActiveKit({
						...kit,
						options: kit.options.map((opt) => allOptions!.find((allOption) => allOption.id === opt.id)!)
					})
				)
 }
			}
		>
			<p style={{ maskImage: "linear-gradient(to right, black 65%, transparent 92%, transparent 100%)" }}>{title}</p>
			{favorite && (
				<SVG.Star
					style={{
						position: "absolute",
						top: "50%",
						right: "8px",
						transform: "translateY(-50%)"
					}}
					fill={colors.gold}
					stroke={colors.gold}
					width="12px"
				/>
			)}
			<SVG.Export
				stroke={activeKit.id === kit.id ? colors.darker : colors.light}
				style={{
					position: "absolute",
					top: "50%",
					right: favorite ? "28px" : "8px",
					transform: "translateY(-50%)",
					width: "20px",
					cursor: "pointer"
				}}
				onClick={() => {
					dispatch(
						setModal({
							type: "Quick Command Export",
							data: [kit]
						})
					)
				}}
				dataCy={`${base.displayName}-quick-export`}
			/>
		</Button>
	)
}

export default KitButton

// Styled Components

const Button = styled.button<{ active: boolean }>`
	position: relative;
	appearance: none;
	border: none;
	background-color: ${(props) => (props.active ? colors.darker : "transparent")};
	display: block;
	width: 100%;
	padding: 12px 24px;
	padding-right: 52px;
	border-radius: 12px;
	color: ${colors.white};
	font-family: "Montserrat", sans-serif;
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 2px;
	text-align: left;
	cursor: pointer;
	overflow: hidden;

	&:hover {
		background-color: ${colors.white};
		color: ${colors.middle};
	}
`
