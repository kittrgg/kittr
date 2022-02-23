import styled from "styled-components"

import { header2 } from "@Styles/typography"
import { getToken } from "@Services/firebase/auth/getToken"
import { useSelector, useDispatch } from "@Redux/store"
import { clearKitEditor, setModal } from "@Redux/slices/dashboard"
import { useChannelData } from "@Redux/slices/dashboard/selectors"
import { Modal, Button, Spinner } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import fetch from "@Fetch"

const KitDeleteConfirmation = () => {
	const { _id } = useChannelData()
	const data = useSelector((state) => state.dashboard.modal.data)
	const dispatch = useDispatch()
	const { mutate, isLoading } = useDashboardMutator(async () => {
		try {
			const result = await fetch.delete({
				url: `/api/channel/kit`,
				headers: { authorization: `Bearer: ${await getToken()}` },
				body: { channelId: _id, kitId }
			})

			if (result) {
				dispatch(setModal({ type: "", data: {} }))
				dispatch(clearKitEditor())
			}
		} catch (error) {
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	})

	const { base, _id: kitId } = data

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
				<Button design="white" text="YES, REMOVE FROM KITS" onClick={mutate} style={{ marginLeft: "48px" }} />
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
