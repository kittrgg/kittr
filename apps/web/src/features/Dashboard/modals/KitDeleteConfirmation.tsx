import { Button, Modal, Spinner } from "@Components/shared"
import { clearKitEditor, setModal } from "@Redux/slices/dashboard"
import { useChannelData, useChannelView } from "@Redux/slices/dashboard/selectors"
import { useDispatch, useSelector } from "@Redux/store"
import { header2 } from "@Styles/typography"
import styled from "styled-components"
import { trpc } from "@/lib/trpc"

function KitDeleteConfirmation() {
	const { data: channelData, refetch: refetchDashboard } = useChannelData()
	const data = useSelector((state) => state.dashboard.modal.data)
	const { view } = useChannelView()
	const dispatch = useDispatch()
	const { mutate, isLoading } = trpc.channels.kits.delete.useMutation({
		onSuccess: () => {
			dispatch(setModal({ type: "", data: {} }))
			dispatch(clearKitEditor())
			refetchDashboard()
		},
		onError: () => {
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	})

	const { base, id: kitId } = data

	if (isLoading) {
		return (
			<Modal backgroundClickToClose title="">
				<Spinner height="50px" width="50px" />
			</Modal>
		)
	}

	return (
		<Modal backgroundClickToClose title="WAIT A MINUTE...">
			<Warning>ARE YOU SURE YOU WANT TO DELETE YOUR {base.displayName} KIT?</Warning>
			<Flex>
				<Button design="transparent" onClick={() => dispatch(setModal({ type: "", data: null }))} text="NO, KEEP IT" />
				<Button
					design="white"
					onClick={() => mutate({ channelId: channelData?.id!, kitId, gameView: view })}
					style={{ marginLeft: "48px" }}
					text="YES, REMOVE FROM KITS"
				/>
			</Flex>
		</Modal>
	)
}

export default KitDeleteConfirmation

// Styled Components

const Warning = styled.p`
	${header2};
	text-align: center;
`

const Flex = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 48px;
`
