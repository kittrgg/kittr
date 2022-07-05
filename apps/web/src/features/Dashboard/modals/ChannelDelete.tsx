import { useState } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { Button, Modal, TextInput } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useManagedChannels } from "@Hooks/api/useManagedChannels"
import { setActiveView, setModal } from "@Redux/slices/dashboard"
import { useChannelData } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { getToken } from "@Services/firebase/auth"
import { header2 } from "@Styles/typography"
import { useSocket } from "pages/dashboard.page"

/** Modal to allow the user to delete the channel. */
const ChannelDeleteModal = () => {
	const socket = useSocket()
	const dispatch = useDispatch()
	const { data: channelData } = useChannelData()
	const [input, setInput] = useState("")
	const { refetch } = useManagedChannels()
	const { mutate } = useDashboardMutator({
		path: "channels/delete",
		opts: {
			onSuccess: () => {
				socket.emit(`channelDelete`, channelData?.id)
				dispatch(setActiveView({ channelId: "", view: "Channel List" }))
				dispatch(setModal({ type: "", data: {} }))
				refetch()
			},
			onError: () => {
				dispatch(setModal({ type: "Error Notification", data: {} }))
			}
		}
	})

	return (
		<Modal backgroundClickToClose title="ARE YOU SURE YOU WANT TO DELETE YOUR CHANNEL ACCOUNT?">
			<Warning>THIS WILL PERMANENTLY REMOVE ALL SETTINGS, GAMES, KITS, AND ASSOCIATED DATA.</Warning>
			<TextInput
				type="text"
				name="displayNameDelete"
				topLabel
				label="Channel Name"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				inputStyles={{ width: "100%" }}
			/>
			<FlexRow>
				<Button design="transparent" text="NO, KEEP IT" onClick={() => dispatch(setModal({ type: "", data: {} }))} />
				<Button
					design="transparent"
					text="DELETE FOREVER"
					disabled={channelData?.displayName !== input}
					onClick={async () => mutate({ channelId: channelData?.id! })}
					style={{ backgroundColor: colors.red }}
				/>
			</FlexRow>
		</Modal>
	)
}

export default ChannelDeleteModal

// Styled Components

const Warning = styled.p`
	color: ${colors.red};
	${header2};
`

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 64px;
`
