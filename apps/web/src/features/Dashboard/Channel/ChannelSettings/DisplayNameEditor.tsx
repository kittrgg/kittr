import { useEffect, useState } from "react"

import colors from "@Colors"
import { Button, TextInputBox } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { getToken } from "@Services/firebase/auth"
import Title from "../../H3"

/** Edit the name of the channel. */
const DisplayNameEditor = ({ ...props }) => {
	const [error, setError] = useState("")
	const dispatch = useDispatch()
	const { data } = useChannelData()
	const [displayName, setDisplayName] = useState(data?.displayName || "")

	const originalName = data?.displayName || ""

	const { mutate, isLoading, isSuccess } = useDashboardMutator({
		path: "channels/update",
		opts: {
			onError: () => {
				dispatch(setModal({ type: "Error Notification", data: {} }))
			}
		}
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
				onClick={async () => mutate({ channelId: data?.id!, data: { displayName } })}
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
