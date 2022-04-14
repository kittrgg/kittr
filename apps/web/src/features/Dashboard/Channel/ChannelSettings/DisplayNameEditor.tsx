import { useState, useEffect } from "react"

import { NextClientEndpointError } from "@kittr/types"
import colors from "@Colors"
import { getToken } from "@Services/firebase/auth/getToken"
import { TextInputBox, Button } from "@Components/shared"
import { setModal } from "@Redux/slices/dashboard"
import { useDispatch } from "@Redux/store"
import { useChannelData } from "@Redux/slices/dashboard/selectors"
import Title from "../../H3"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import fetch from "@Fetch"
import { ChannelModel } from "@Services/orm/models/Channel"

/** Edit the name of the channel. */
const DisplayNameEditor = ({ ...props }) => {
	const [error, setError] = useState("")
	const dispatch = useDispatch()
	const { data } = useChannelData()
	const [displayName, setDisplayName] = useState(data?.displayName || "")

	const originalName = data?.displayName || ""

	const { mutate, isLoading, isSuccess } = useDashboardMutator(async () => {
		const result = await fetch
			.put<ChannelModel | NextClientEndpointError>({
				url: `/api/channel/meta/displayName`,
				headers: { authorization: `Bearer: ${await getToken()}` },
				body: { id: data?.id, value: displayName }
			})
			.catch((err) => {
				dispatch(setModal({ type: "Error Notification", data: {} }))
			})

		return result
	})

	useEffect(() => {
		setDisplayName(displayName)
	}, [displayName])

	const isChanged = originalName !== displayName

	return (
		<>
			<Title>Channel Name</Title>
			<TextInputBox
				type="text"
				name="displayName"
				value={displayName}
				subline={
					error
						? error
						: isSuccess
						? "Your display name was changed. Make sure you update all your links and commands!"
						: "Careful! Changing your display name also changes your links. Ye be warned..."
				}
				sublineStyles={error ? { color: colors.red } : {}}
				onChange={(e) => {
					setError("")
					setDisplayName(e.target.value)
				}}
				inputStyles={{ margin: "20px 0" }}
			/>
			<Button
				design="white"
				text="Save Changes"
				disabled={!isChanged || isLoading}
				onClick={mutate}
				style={{
					marginTop: "24px",
					opacity: isLoading ? 0.3 : isChanged ? 1 : 0,
					cursor: isLoading || isChanged ? "" : "default"
				}}
				dataCy="confirm-name-change"
			/>
		</>
	)
}

export default DisplayNameEditor
