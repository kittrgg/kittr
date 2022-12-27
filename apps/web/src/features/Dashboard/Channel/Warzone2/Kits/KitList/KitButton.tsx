import colors from "@Colors"
import { SVG } from "@Components/shared"
import { setActiveKit, setModal } from "@Redux/slices/dashboard"
import { useActiveKit, useChannelData } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { WarzoneKit, WarzoneKitBase, WarzoneKitOption, WarzoneTwoKitOptionTuning } from "@kittr/prisma"
import { Button } from "@kittr/ui"
import styled from "styled-components"

interface Props {
	favorite?: true
	kit: WarzoneKit & { base: WarzoneKitBase; options: WarzoneKitOption[]; tuning: WarzoneTwoKitOptionTuning[] }
}

const KitButton = ({ favorite, kit }: Props) => {
	const { isFetching: isFetchingChannelData } = useChannelData()
	const dispatch = useDispatch()
	const activeKit = useActiveKit()
	const { customTitle, base } = kit

	let title = ""

	if (customTitle) {
		title = `${base.displayName} (${customTitle})`
	} else {
		title = `${base.displayName}`
	}

	return (
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		<Button
			loading={isFetchingChannelData}
			fullWidth
			variant="subtle"
			styles={{
				root: { backgroundColor: activeKit.id == kit.id ? colors.darker : "transparent" },
				label: {
					width: "100%",
					display: "flex",
					textAlign: "left",
					color: colors.white
				}
			}}
			leftIcon={favorite && <SVG.Star fill={colors.gold} stroke={colors.gold} width="12px" />}
			rightIcon={
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
			}
			key={kit.id}
			onClick={() => dispatch(setActiveKit(kit))}
		>
			<p style={{ maskImage: "linear-gradient(to right, black 65%, transparent 92%, transparent 100%)" }}>{title}</p>
		</Button>
	)
}

export default KitButton

// Styled Components

// const Button = styled.button<{ active: boolean }>`
// 	position: relative;
// 	appearance: none;
// 	border: none;
// 	background-color: ${(props) => (props.active ? colors.darker : "transparent")};
// 	display: block;
// 	width: 100%;
// 	padding: 12px 24px;
// 	padding-right: 52px;
// 	border-radius: 12px;
// 	color: ${colors.white};
// 	font-family: "Montserrat", sans-serif;
// 	font-size: 18px;
// 	font-weight: 500;
// 	letter-spacing: 2px;
// 	text-align: left;
// 	cursor: pointer;
// 	overflow: hidden;

// 	&:hover {
// 		background-color: ${colors.white};
// 		color: ${colors.middle};
// 	}
// `
