import { Button, Modal, Spinner } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { clearKitEditor, setModal } from "@Redux/slices/dashboard"
import { useChannelData, useChannelView } from "@Redux/slices/dashboard/selectors"
import { useDispatch, useSelector } from "@Redux/store"
import { header2 } from "@Styles/typography"
import styled from "styled-components"

const KitDeleteConfirmation = () => {
	const { data: channelData } = useChannelData()
	const data = useSelector((state) => state.dashboard.modal.data)
	const { view } = useChannelView()
	const dispatch = useDispatch()
	const { mutate, isLoading } = useDashboardMutator({
		path: "channels/kits/delete",
		opts: {
			onSuccess: () => {
				dispatch(setModal({ type: "", data: {} }))
				dispatch(clearKitEditor())
			},
			onError: () => {
				dispatch(setModal({ type: "Error Notification", data: {} }))
			}
		}
	})

	const { base, id: kitId } = data

	if (isLoading) {
		return (
			<Modal backgroundClickToClose title="">
				<Spinner width="50px" height="50px" />
			</Modal>
		)
	}

	return (
		<Modal backgroundClickToClose title="WAIT A MINUTE...">
			<Warning>ARE YOU SURE YOU WANT TO DELETE YOUR {base.displayName} KIT?</Warning>
			<Flex>
				<Button design="transparent" text="NO, KEEP IT" onClick={() => dispatch(setModal({ type: "", data: null }))} />
				<Button
					design="white"
					text="YES, REMOVE FROM KITS"
					onClick={() => mutate({ channelId: channelData?.id!, kitId: kitId, gameView: view })}
					style={{ marginLeft: "48px" }}
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
