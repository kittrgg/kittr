import { useEffect } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { header1 } from "@Styles/typography"

import { useSelector, useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelView } from "@Redux/slices/dashboard/selectors"
import Button from "@Components/shared/Button"
import ChannelTopBar from "../../UserIdentity"
import AffiliateCode from "./AffiliateCode"
import Kits from "./Kits"
import ExportBotCommands from "../../modals/ExportBotCommands"
import { useAllGames } from "@Hooks/api/useAllGames"
import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"

/** The Warzone screen for a channel. */
const Warzone = ({ ...props }) => {
	const { gameId } = useChannelView()
	const modal = useSelector((state) => state.dashboard.modal.type)
	const dispatch = useDispatch()
	const { data: allGames } = useAllGames()

	const gameInfo = allGames!.find((allGame: any) => allGame._id === gameId)!

	return (
		<FirebaseStorageResolver
			noSpinner
			path={gameInfo.backgroundImage}
			render={(img) => (
				<>
					{modal === "Export Bot Commands" && <ExportBotCommands />}
					<Container background={img}>
						<ChannelTopBar />
						<HeaderWrap>
							<Header>WARZONE</Header>
							<HeaderContent>
								<AffiliateCode />
								<Button
									design="transparent"
									text="EXPORT BOT COMMANDS"
									onClick={() => dispatch(setModal({ type: "Export Bot Commands", data: "" }))}
								/>
							</HeaderContent>
						</HeaderWrap>
						<Kits />
					</Container>
				</>
			)}
		/>
	)
}

export default Warzone

// Styled Components

const Container = styled.div<{ background: string }>`
	position: absolute;
	inset: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	background: linear-gradient(to bottom, rgba(61, 60, 64, 0.8), ${colors.light} 250px, ${colors.light} 250px),
		url(${(props: { background: string }) => props.background});
	background-repeat: no-repeat;
	background-position: bottom;
	background-size: cover;
	overflow-y: hidden;
`

const HeaderWrap = styled.div`
	width: 100%;
	padding: 52px 70px 0;
`

const Header = styled.h1`
	margin-bottom: 8px;
	${header1};
`

const HeaderContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
`
