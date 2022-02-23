import styled from "styled-components"

import colors from "@Colors"
import { paragraph } from "@Styles/typography"
import { getToken } from "@Services/firebase/auth/getToken"
import { useDispatch } from "@Redux/store"
import { setActiveView, setModal } from "@Redux/slices/dashboard"
import { useChannelData, useModal } from "@Redux/slices/dashboard/selectors"
import { Modal, Button, Spinner } from "@Components/shared"
import { useUser } from "@Hooks/useUser"
import { useManagedChannels } from "@Hooks/api/useManagedChannels"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import fetch from "@Fetch"

const DeleteManager = () => {
	const dispatch = useDispatch()
	const { _id: channelId } = useChannelData()
	const { data } = useModal()
	const user = useUser()
	const { refetch } = useManagedChannels()
	const { refetch: refetchChannel } = useDashboardChannel()
	const isSelf = user?.email === data.email
	const { mutate, isLoading } = useDashboardMutator(async () => {
		fetch
			.delete({
				url: `/api/manager/removeManager`,
				headers: { authorization: `Bearer: ${await getToken()}` },
				body: { uid: data.uid, channelId }
			})
			.then(() => {
				refetchChannel()
				dispatch(setModal({ type: "", data: {} }))

				if (isSelf) {
					refetch().finally(() => dispatch(setActiveView({ channelId: "", view: "Channel List" })))
				}
			})
			.catch(() => {
				dispatch(setModal({ type: "Error Notification", data: {} }))
			})
	})

	if (isLoading) {
		return (
			<Modal title="WAIT A MINUTE...">
				<Spinner width="100px" height="50px" />
			</Modal>
		)
	}

	return (
		<Modal backgroundClickToClose title="WAIT A MINUTE...">
			<Paragraph style={{ marginBottom: "24px" }}>ARE YOU SURE YOU WANT TO DELETE</Paragraph>
			<Paragraph>{data.displayName}</Paragraph>
			<Paragraph>{data.email}</Paragraph>
			<Warning>{isSelf ? "You" : "They"} will lose all access to this channel.</Warning>

			<RowFlex>
				<Button
					design="transparent"
					text={"NO, KEEP " + (isSelf ? "MYSELF" : "THEM")}
					onClick={() => dispatch(setModal({ type: "", data: {} }))}
				/>
				<Button
					design="white"
					text={"YES, REMOVE " + (isSelf ? "MYSELF" : "THIS MANAGER")}
					onClick={mutate}
					style={{ marginLeft: "32px" }}
					dataCy="confirm-manager-removal"
				/>
			</RowFlex>
		</Modal>
	)
}

export default DeleteManager

// Styled Components

const Paragraph = styled.p`
	font-size: 22px;
	letter-spacing: 2px;
	text-align: center;
`

const Warning = styled.p`
	margin-top: 64px;
	margin-bottom: 32px;
	color: ${colors.red};
	${paragraph};
	text-align: center;
`

const RowFlex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
`
