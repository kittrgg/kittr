import styled from "styled-components"

import colors from "@Colors"
import { header2 } from "@Styles/typography"
import { getToken } from "@Services/firebase/auth/getToken"
import { useDispatch, useSelector } from "@Redux/store"
import { setModal, setChannelView } from "@Redux/slices/dashboard"
import { useChannelData } from "@Redux/slices/dashboard/selectors"
import { Modal, Button } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useSocket } from "pages/dashboard.page"
import fetch from "@Fetch"

/** Modal to delete a game from a channel. */
const DeleteGameModal = () => {
	const dispatch = useDispatch()
	const { _id } = useChannelData()
	const gameId = useSelector((state) => state.dashboard.modal.data.idToDelete)
	const socket = useSocket()
	const { mutate, isLoading } = useDashboardMutator(async () => {
		try {
			fetch
				.delete({
					url: `/api/channel/game/delete`,
					headers: { authorization: `Bearer: ${await getToken()}` },
					body: { gameId, channelId: _id }
				})
				.then(() => {
					socket.emit(`gameDelete`, _id)
					dispatch(setModal({ type: "", data: "" }))
					dispatch(setChannelView({ gameId: "", view: "Deleted Game Notification" }))
				})
		} catch (error) {
			dispatch(setModal({ type: "Error Notification", data: {} }))
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
					onClick={mutate}
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
