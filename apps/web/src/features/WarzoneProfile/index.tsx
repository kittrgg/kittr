/* eslint-disable @typescript-eslint/no-explicit-any */
// import { IPopularityRates } from "@kittr/types"
import ChannelMain from "./Main"
import Sidebar from "./Sidebar"
import colors from "@Colors"
import NavMenu from "@Components/layouts/NavMenu"
import { useDimensions } from "@Hooks/useDimensions"
import { setIsSidebarOpen } from "@Redux/slices/displayr"
import { useSidebarState } from "@Redux/slices/displayr/selectors"
import { useDispatch } from "@Redux/store"
import { InferQueryOutput } from "@Server/index"
import type { NonNullable } from "@Types/index"
import { Routes } from "@Utils/lookups/routes"
import { Drawer } from "@mantine/core"
import { useViewportSize } from "@mantine/hooks"
import { useRouter } from "next/router"
import styled from "styled-components"

interface Props {
	channel: NonNullable<InferQueryOutput<"channels/profile/get">>
}

const MOBILE_WIDTH = 1050

const WarzoneProfile = ({ channel }: Props) => {
	const { query, push } = useRouter()
	const dispatch = useDispatch()
	const isSidebarOpen = useSidebarState()
	const { width } = useViewportSize()
	// const activeWeapon = useActiveWeapon()
	const { observe, height } = useDimensions()
	const code = channel?.gameCreatorCodes.find((code) => code.game.urlSafeName === query.game)?.code

	return (
		<div>
			<NavMenu
				wrapperRef={observe}
				breakpoint={1050}
				backFunction={() =>
					isSidebarOpen ? dispatch(setIsSidebarOpen(false)) : push(Routes.CHANNEL.createPath(query.channel as string))
				}
				middleComponent={
					<>
						<HeaderTitle>{`${query.channel || ("" as string)}`}</HeaderTitle>
						{code && <CreatorCode>CODE: {code}</CreatorCode>}
					</>
				}
			/>
			<Drawer
				opened={isSidebarOpen || width >= MOBILE_WIDTH}
				onClose={() => dispatch(setIsSidebarOpen(false))}
				hideCloseButton={width >= MOBILE_WIDTH}
				noOverlay={width >= MOBILE_WIDTH}
				styles={{
					closeButton: { marginTop: height },
					drawer: { marginTop: width >= MOBILE_WIDTH ? height : 0 }
				}}
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
