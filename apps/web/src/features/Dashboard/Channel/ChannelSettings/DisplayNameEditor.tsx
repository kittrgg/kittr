import Title from "../../H3"
import { trpc } from "@/lib/trpc"
import colors from "@Colors"
import { Button, TextInputBox } from "@Components/shared"
import { useChannelData } from "@Redux/slices/dashboard/selectors"
import { useEffect, useState } from "react"

/** Edit the name of the channel. */
const DisplayNameEditor = () => {
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
