import ChannelTopBar from "../../UserIdentity"
import ExportBotCommands from "../../modals/ExportBotCommands"
import AffiliateCode from "./AffiliateCode"
import Kits from "./Kits"
import Button from "@Components/shared/Button"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelView } from "@Redux/slices/dashboard/selectors"
import { useSelector, useDispatch } from "@Redux/store"
import { header1 } from "@Styles/typography"
import styled from "styled-components"

// import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"

/** The Warzone screen for a channel. */
const Warzone = () => {
	const { gameId } = useChannelView()
	const { data } = useDashboardChannel()
	const modal = useSelector((state) => state.dashboard.modal.type)
	const dispatch = useDispatch()
	const gameInfo = data?.games?.find((game) => game.id === gameId)

	if (gameInfo) {
		return (
			<>
				{modal === "Export Bot Commands" && <ExportBotCommands />}
				<Container>
					<ChannelTopBar />
					<HeaderWrap>
						<Header>{gameInfo.urlSafeName.toUpperCase()}</Header>
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
		)
	}

	return <p>How did you get here?</p>
}

export default Warzone

// Styled Components

const Container = styled.div`
	position: absolute;
	inset: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	background-repeat: no-repeat;
	background-position: bottom;
	background-size: cover;
	overflow-y: hidden;
`

// const Container = styled.div`
// 	position: absolute;
// 	inset: 0;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: flex-start;
// 	justify-content: flex-start;
// 	background: linear-gradient(to bottom, rgba(61, 60, 64, 0.8), ${colors.light} 250px, ${colors.light} 250px),
// 		url(${(props: { background: string }) => props.background});
// 	background-repeat: no-repeat;
// 	background-position: bottom;
// 	background-size: cover;
// 	overflow-y: hidden;
// `

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
