import styled from "styled-components"

import colors from "@Colors"
import { getToken } from "@Services/firebase/auth/getToken"
import { paragraph } from "@Styles/typography"
import { useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"
import { useModal, useChannelData } from "@Redux/slices/dashboard/selectors"
import { Button, Spinner, Modal } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import fetch from "@Fetch"

const DeleteManager = ({ ...props }) => {
	const dispatch = useDispatch()
	const { _id: channelId } = useChannelData()
	const { data } = useModal()
	const { mutate: demote, isLoading: demoting } = useDashboardMutator(async () => {
		try {
			const result = await fetch.put({
				url: `/api/manager/demote`,
				headers: { authorization: `Bearer: ${await getToken()}` },
				body: { uid: data.uid, channelId }
			})

			if (result) {
				dispatch(setModal({ type: "", data: {} }))
			}
		} catch (error) {
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	})

	const { mutate: promote, isLoading: promoting } = useDashboardMutator(async () => {
		try {
			const result = await fetch.put({
				url: `/api/manager/promote`,
				headers: { authorization: `Bearer: ${await getToken()}` },
				body: { uid: data.uid, channelId }
			})

			if (result) {
				dispatch(setModal({ type: "", data: {} }))
			}
		} catch (error) {
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	})

	if (promoting || demoting)
		return (
			<Modal backgroundClickToClose title="MAKING THE SWITCH...">
				<Spinner width="100%" height="50px" />
			</Modal>
		)

	if (data.role == "Administrator") {
		return (
			<Modal backgroundClickToClose title="EXITING THE CIRCLE OF TRUST?">
				<Paragraph style={{ marginBottom: "24px" }}>ARE YOU SURE YOU WANT TO DEMOTE</Paragraph>
				<Paragraph>{data.displayName}</Paragraph>
				<Paragraph style={{ marginBottom: "24px" }}>{data.email}</Paragraph>
				<Paragraph>to EDITOR?</Paragraph>
				<Warning>This action will remove many of their abilities. Check the roles grid for more.</Warning>
				<RowFlex>
					<Button
						design="transparent"
						text="NO, KEEP THE SAME"
						onClick={() => dispatch(setModal({ type: "", data: {} }))}
					/>
					<Button design="white" text="YES, DEMOTE THEM" onClick={demote} style={{ marginLeft: "32px" }} />
				</RowFlex>
			</Modal>
		)
	}

	return (
		<Modal title="ENTERING THE CIRCLE OF TRUST?">
			<Paragraph style={{ marginBottom: "24px" }}>ARE YOU SURE YOU WANT TO PROMOTE</Paragraph>
			<Paragraph>{data.displayName}</Paragraph>
			<Paragraph style={{ marginBottom: "24px" }}>{data.email}</Paragraph>
			<Paragraph>to ADMINISTRATOR?</Paragraph>
			<Warning style={{ color: colors.green }}>
				This action will grant them new abilities. Check the roles grid for more.
			</Warning>
			<RowFlex>
				<Button
					design="transparent"
					text="NO, KEEP THE SAME"
					onClick={() => dispatch(setModal({ type: "", data: {} }))}
				/>
				<Button design="white" text="YES, PROMOTE THEM" onClick={promote} style={{ marginLeft: "32px" }} />
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
	margin-top: 64px;
`
