import colors from "@Colors"
import { Button, Modal, Spinner, TextInput } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useManagedChannels } from "@Hooks/api/useManagedChannels"
import { useUser } from "@Hooks/useUser"
import { handleTutorialAction, setModal } from "@Redux/slices/dashboard"
import { useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { getToken } from "@Services/firebase/auth/getToken"
import { paragraph } from "@Styles/typography"
import { useState } from "react"
import styled from "styled-components"
import fetch from "@Fetch"

const CreateChannelModal = () => {
	const dispatch = useDispatch()
	const user = useUser()
	const { data } = useModal()
	const { refetch } = useManagedChannels()
	const [displayName, setDisplayName] = useState("")

	const { mutate, isLoading, error } = useDashboardMutator<any, NextClientEndpointError>(async () => {
		if (displayName.length === 0) return Promise.reject({ errorMessage: "You must have a display name." })
		if (displayName.length > 26) {
			setDisplayName("")
			return Promise.reject({ errorMessage: "That channel name is too long. 25 characters or less." })
		}

		const result = await fetch.post({
			url: `/api/channels`,
			headers: { authorization: `Bearer: ${await getToken()}` },
			body: { displayName, userId: user?.uid }
		})

		if (result) {
			refetch()

			dispatch(
				handleTutorialAction({
					condition: data.isTutorial,
					trueState: { type: "Tutorial", data: { page: 3 } },
					falseState: { type: "", data: {} }
				})
			)
		}
	})

	if (isLoading) {
		return (
			<Modal backgroundClickToClose title="">
				<Spinner style={{ width: "50px" }} />
			</Modal>
		)
	}

	return (
		<Modal backgroundClickToClose title="CREATE NEW CHANNEL">
			<TextInput
				type="text"
				name="displayNameInput"
				label="Display Name"
				value={displayName}
				onChange={(e) => setDisplayName(e.target.value)}
			/>
			<Error>{error?.errorMessage}</Error>
			<FlexRow>
				<Button design="transparent" text="CANCEL" onClick={() => dispatch(setModal({ type: "", data: "" }))} />
				<Button
					design="white"
					text={isLoading ? "..." : "CREATE"}
					disabled={isLoading}
					onClick={mutate}
					dataCy="create-channel-button"
				/>
			</FlexRow>
		</Modal>
	)
}

export default CreateChannelModal

// Styled Components

const Error = styled.p`
	margin-top: 32px;
	color: ${colors.red};
	${paragraph};
	text-align: center;
`

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 28px;
`
