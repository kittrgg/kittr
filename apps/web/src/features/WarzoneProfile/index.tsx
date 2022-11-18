// import { IPopularityRates } from "@kittr/types"
import colors from "@Colors"
import FullScreen from "@Components/layouts/FullScreen"
import NavMenu from "@Components/layouts/NavMenu"
import { useDimensions } from "@Hooks/useDimensions"
import { useLockBodyScroll } from "@Hooks/useLockBodyScroll"
import {
	WarzoneTwoKit,
	WarzoneTwoKitBase,
	WarzoneTwoKitBaseCategory,
	WarzoneTwoKitOption,
	WarzoneKit,
	WarzoneKitBase,
	WarzoneKitBaseCategory,
	WarzoneKitOption
} from "@kittr/prisma"
import { setActiveWeapon, setChannel, setIsSidebarOpen } from "@Redux/slices/displayr"
import { useActiveWeapon, useSidebarState } from "@Redux/slices/displayr/selectors"
import { useDispatch } from "@Redux/store"
import { InferQueryOutput } from "@Server/index"
import type { NonNullable } from "@Types/index"
import { Routes } from "@Utils/lookups/routes"
import { useRouter } from "next/router"
import { useEffect } from "react"
import styled from "styled-components"
import ChannelMain from "./Main"
import Sidebar from "./Sidebar"

interface Props {
	channel: NonNullable<InferQueryOutput<"channels/profile/get">>
}

const WarzoneProfile = ({ channel }: Props) => {
	const router = useRouter()
	const { query } = router
	const dispatch = useDispatch()
	const isSidebarOpen = useSidebarState()
	const activeWeapon = useActiveWeapon()
	const { observe, height } = useDimensions()
	useLockBodyScroll()

	const code = channel?.gameCreatorCodes.find((code) => code.game.urlSafeName === query.game)?.code

	useEffect(() => {
		dispatch(setChannel(channel))
		// dispatch(setPopularityRates(popularityRates))

		return () => {
			dispatch(setChannel({} as any))
			dispatch(
				setActiveWeapon(
					{} as (WarzoneKit | WarzoneTwoKit) & {
						options: WarzoneKitOption[] | WarzoneTwoKitOption[]
						base: (WarzoneKitBase | WarzoneTwoKitBase) & {
							category: WarzoneKitBaseCategory | WarzoneTwoKitBaseCategory
						}
					}
				)
			)
			// dispatch(setPopularityRates({} as IPopularityRates))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const weaponQuery = query.weapon || query.k

		if (activeWeapon) {
			if (Object.keys(activeWeapon).length === 0 && weaponQuery) {
				const filteredKits = channel?.warzoneKits
					.filter((elem) => elem.base.displayName.replace(/ /g, "-") === weaponQuery)
					.sort((a, b) => Number(b.featured) - Number(a.featured))
				const filteredWz2Kits = channel?.warzoneTwoKits
					.filter((elem) => elem.base.displayName.replace(/ /g, "-") === weaponQuery)
					.sort((a, b) => Number(b.featured) - Number(a.featured))

				const [firstKit] = router.query.game === "wz2" ? filteredWz2Kits! : filteredKits!
				dispatch(setActiveWeapon(firstKit))
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeWeapon, query.weapon, query.k])

	return (
		<FullScreen
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<NavMenu
				wrapperRef={observe}
				breakpoint={1050}
				backFunction={() =>
					isSidebarOpen
						? dispatch(setIsSidebarOpen(false))
						: router.push(Routes.CHANNEL.createPath(query.channel as string))
				}
				middleComponent={
					<>
						<HeaderTitle>{`${query.channel || ("" as string)}`}</HeaderTitle>
						{code && <CreatorCode>CODE: {code}</CreatorCode>}
					</>
				}
			/>
			<Body headerHeight={height}>
				<Sidebar />
				<ChannelMain />
			</Body>
		</FullScreen>
	)
}

export default WarzoneProfile

// Styled Components

const Body = styled.div<{ headerHeight: number }>`
	flex: 1;
	display: flex;
	flex-direction: row;
	width: 100%;
	padding-top: ${(props) => props.headerHeight + "px"};
	overflow: hidden;
`

const HeaderTitle = styled.h1`
	color: ${colors.white};
	font-weight: 600;
	letter-spacing: 2px;
	text-decoration: none;
`

const CreatorCode = styled.p`
	margin-top: 4px;
	color: ${colors.lighter};
`
