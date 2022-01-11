import colors from "@Colors"
import FullScreen from "@Components/layouts/FullScreen"
import NavMenu from "@Components/layouts/NavMenu"
import { useDimensions } from "@Hooks/useDimensions"
import { useLockBodyScroll } from "@Hooks/useLockBodyScroll"
import { setActiveWeapon, setChannel, setIsSidebarOpen, setPopularityRates } from "@Redux/slices/displayr"
import { useActiveWeapon, useSidebarState } from "@Redux/slices/displayr/selectors"
import { useDispatch } from "@Redux/store"
import { Routes } from "@Utils/lookups/routes"
import { useRouter } from "next/router"
import { useEffect } from "react"
import styled from "styled-components"
import ChannelMain from "./Main"
import Sidebar from "./Sidebar"

interface Props {
	channel: IChannel
	popularityRates: IPopularityRates
}

const Channels = ({ channel, popularityRates }: Props) => {
	const router = useRouter()
	const { query } = router
	const dispatch = useDispatch()
	const isSidebarOpen = useSidebarState()
	const activeWeapon = useActiveWeapon()
	const { observe, height } = useDimensions()
	useLockBodyScroll()

	useEffect(() => {
		dispatch(setChannel(channel))
		dispatch(setPopularityRates(popularityRates))

		return () => {
			dispatch(setChannel({} as IChannel))
			dispatch(setActiveWeapon({} as IKit))
			dispatch(setPopularityRates({} as IPopularityRates))
		}
	}, [])

	useEffect(() => {
		const weaponQuery = query.weapon || query.k

		if (activeWeapon) {
			if (Object.keys(activeWeapon).length === 0 && weaponQuery) {
				const { kits } = channel
				const filteredKits = kits
					.filter((elem) => elem.base.displayName.replace(/ /g, "-") === weaponQuery)
					.sort((a, b) => Number(b.userData.featured) - Number(a.userData.featured))

				const firstKit = filteredKits[0]
				dispatch(setActiveWeapon(firstKit))
			}
		}
	}, [activeWeapon, query.weapon, query.k])

	// useEffect(() => {
	//     fetch(`/api/channel/incrementViews`, {
	//         method: "PUT",
	//         body: JSON.stringify({ urlSafeName: query.channel })
	//     })
	// }, [query])

	const activeGame = channel.games ? channel.games.find((game: IGame) => game.urlSafeName === query.game) : { code: "" }

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
						{activeGame?.code && <CreatorCode>CODE: {activeGame?.code}</CreatorCode>}
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

export default Channels

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
	color: ${colors.lightest};
`
