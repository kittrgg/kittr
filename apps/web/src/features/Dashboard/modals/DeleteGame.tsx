import styled from "styled-components"

import colors from "@Colors"
import { Button, Modal } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { setChannelView, setModal } from "@Redux/slices/dashboard"
import { useChannelData } from "@Redux/slices/dashboard/selectors"
import { useDispatch, useSelector } from "@Redux/store"
import { header2 } from "@Styles/typography"
import { useSocket } from "pages/dashboard.page"

/** Modal to delete a game from a channel. */
const DeleteGameModal = () => {
	const dispatch = useDispatch()
	const { data: channelData } = useChannelData()
	const gameId = useSelector((state) => state.dashboard.modal.data.idToDelete)
	const socket = useSocket()

	const { mutate, isLoading } = useDashboardMutator({
		path: "channels/games/delete",
		opts: {
			onSuccess: () => {
				socket.emit(`gameDelete`, channelData?.id)
				dispatch(setModal({ type: "", data: "" }))
				dispatch(setChannelView({ gameId: "", view: "Deleted Game Notification" }))
			},
			onError: () => {
				dispatch(setModal({ type: "Error Notification", data: {} }))
			}
		}
	})

	return (
		<Modal backgroundClickToClose title="ARE YOU SURE YOU WANT TO DELETE THIS GAME?">
			<Warning>THIS WILL PERMANENTLY REMOVE ALL OF THIS GAMES KITS AND ASSOCIATED DATA. </Warning>
			<ButtonFlex>
				<Button design="transparent" text="NO, KEEP IT" onClick={() => dispatch(setModal({ type: "", data: "" }))} />
				<Button
					design="white"
					text="DELETE FOREVER"
					disabled={isLoading}
					onClick={() => mutate({ gameId, channelId: channelData?.id! })}
					dataCy="delete-game-button"
				/>
			</ButtonFlex>
		</Modal>
	)
}

export default DeleteGameModal

// Styled Components

const Warning = styled.p`
	color: ${colors.red};
	${header2};
	text-align: center;
`

const ButtonFlex = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-top: 24px;
`
