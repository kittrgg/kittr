import colors from "@Colors"
import { Button, Modal } from "@Components/shared"
import { setChannelView, setModal } from "@Redux/slices/dashboard"
import { useChannelData } from "@Redux/slices/dashboard/selectors"
import { useDispatch, useSelector } from "@Redux/store"
import { trpc } from "@Server/createTRPCNext"
import { header2 } from "@Styles/typography"
import { useSocket } from "pages/dashboard.page"
import styled from "styled-components"

/** Modal to delete a game from a channel. */
const DeleteGameModal = () => {
	const dispatch = useDispatch()
	const { data: channelData, refetch: refetchDashboard } = useChannelData()

	const gameId = useSelector((state) => state.dashboard.modal.data.idToDelete)
	const socket = useSocket()

	const { mutate, isLoading } = trpc.channels.games.delete.useMutation({
		onSuccess: () => {
			socket?.emit(`gameDelete`, channelData?.id)
			dispatch(setModal({ type: "", data: "" }))
			dispatch(setChannelView({ gameId: "", view: "Deleted Game Notification" }))
			refetchDashboard()
		},
		onError: () => {
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
