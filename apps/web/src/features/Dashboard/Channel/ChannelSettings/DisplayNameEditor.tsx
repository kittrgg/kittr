import colors from "@Colors"
import { Button, TextInputBox } from "@Components/shared"
import { useChannelData } from "@Redux/slices/dashboard/selectors"
import { useEffect, useState } from "react"
import Title from "../../H3"
import { trpc } from "@/lib/trpc"

/** Edit the name of the channel. */
function DisplayNameEditor() {
	const [error, setError] = useState("")
	const { data } = useChannelData()
	const [displayName, setDisplayName] = useState(data?.displayName || "")

	const originalName = data?.displayName || ""

	const { mutate, isSuccess, isLoading } = trpc.channels.update.useMutation({
		onError: (error) => {
			setError(error.message)
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
				inputStyles={{ margin: "20px 0" }}
				name="displayName"
				onChange={(e) => {
					setError("")
					setDisplayName(e.target.value)
				}}
				subline={
					error
						? error
						: isSuccess
						? "Your display name was changed. Make sure you update all your links and commands!"
						: "Careful! Changing your display name also changes your links. Ye be warned..."
				}
				sublineStyles={error ? { color: colors.red } : {}}
				type="text"
				value={displayName}
			/>
			<Button
				dataCy="confirm-name-change"
				design="white"
				disabled={!isChanged || isLoading}
				onClick={async () => mutate({ channelId: data?.id!, data: { displayName } })}
				style={{
					marginTop: "24px",
					opacity: isLoading ? 0.3 : isChanged ? 1 : 0,
					cursor: isLoading || isChanged ? "" : "default"
				}}
				text="Save Changes"
			/>
		</>
	)
}

export default DisplayNameEditor
