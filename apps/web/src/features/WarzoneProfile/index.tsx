 
// Import { IPopularityRates } from "@kittr/types"
import colors from "@Colors"
import NavMenu from "@Components/layouts/NavMenu"
import { useDimensions } from "@Hooks/useDimensions"
import { setIsSidebarOpen } from "@Redux/slices/displayr"
import { useSidebarState } from "@Redux/slices/displayr/selectors"
import { useDispatch } from "@Redux/store"
import type { NonNullable } from "@Types/index"
import { Routes } from "@Utils/lookups/routes"
import type { RouterOutput } from "@kittr/trpc"
import { Drawer } from "@mantine/core"
import { useViewportSize } from "@mantine/hooks"
import { useRouter } from "next/router"
import styled from "styled-components"
import Sidebar from "./Sidebar"
import ChannelMain from "./Main"

interface Props {
	channel: NonNullable<RouterOutput["channels"]["profile"]["get"]>
}

const MOBILE_WIDTH = 1050

function WarzoneProfile({ channel }: Props) {
	const { query, push } = useRouter()
	const dispatch = useDispatch()
	const isSidebarOpen = useSidebarState()
	const { width } = useViewportSize()
	// Const activeWeapon = useActiveWeapon()
	const { observe, height } = useDimensions()
	const code = channel.gameCreatorCodes.find((code) => code.game.urlSafeName === query.game)?.code

	return (
		<div>
			<NavMenu
				backFunction={() =>
					isSidebarOpen ? dispatch(setIsSidebarOpen(false)) : push(Routes.CHANNEL.createPath(query.channel as string))
				}
				breakpoint={1050}
				middleComponent={
					<>
						<HeaderTitle>{`${query.channel || ("" as string)}`}</HeaderTitle>
						{code ? <CreatorCode>CODE: {code}</CreatorCode> : null}
					</>
				}
				wrapperRef={observe}
			/>
			<Drawer
				onClose={() => dispatch(setIsSidebarOpen(false))}
				opened={isSidebarOpen || width >= MOBILE_WIDTH}
				styles={{
					closeButton: { marginTop: height },
					drawer: { marginTop: width >= MOBILE_WIDTH ? height : 0 }
				}}
				withCloseButton={width <= MOBILE_WIDTH}
				withOverlay={width <= MOBILE_WIDTH}
			>
				<Sidebar />
			</Drawer>
			<ChannelMain />
		</div>
	)
}

export default WarzoneProfile

// Styled Components

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
