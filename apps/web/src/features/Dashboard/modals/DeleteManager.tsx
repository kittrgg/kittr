import colors from "@Colors"
import { Button, Modal, Spinner } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
// import { useManagedChannels } from "@Hooks/api/useManagedChannels"
import { useUser } from "@Hooks/useUser"
import { setActiveView, setModal } from "@Redux/slices/dashboard"
import { useChannelData, useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { trpc } from "@Server/createTRPCNext"
import { paragraph } from "@Styles/typography"
import styled from "styled-components"

const DeleteManager = () => {
	const dispatch = useDispatch()
	const { data: channelData } = useChannelData()
	const { data } = useModal()
	const user = useUser()
	const { refetch } = trpc.managers.channels.list.useQuery()
	const { refetch: refetchChannel } = useDashboardChannel()
	const isSelf = user?.email === data.email

	const { mutate, isLoading } = useDashboardMutator({
		path: "channels/managers/delete",
		opts: {
			onSuccess: () => {
				refetchChannel()
				dispatch(setModal({ type: "", data: {} }))

				if (isSelf) {
					refetch().finally(() => dispatch(setActiveView({ channelId: "", view: "Channel List" })))
				}
			},
			onError: () => {
				dispatch(setModal({ type: "Error Notification", data: {} }))
			}
		}
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
					onClick={() => mutate({ channelId: channelData?.id ?? "", managerIdToDelete: data.id })}
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
