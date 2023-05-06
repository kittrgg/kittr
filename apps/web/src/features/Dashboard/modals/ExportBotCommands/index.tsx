import colors from "@Colors"
import { Button, Modal } from "@Components/shared"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData, useChannelView } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import type { TCommandMethod } from "@kittr/types/types"
import { useState } from "react"
import TwitchStrategyToggle from "./TwitchStrategyToggle"
import MethodToggle from "./MethodToggle"
import UserIncludeToggle from "./IncludeUserToggle"
import CustomTextBuilder from "./CustomTextBuilder"
import CommandsTable from "./CommandsTable"
import { trpc } from "@/lib/trpc"

/**
 * Modal for exporting bot commands to the user's desired channel.
 *
 * Includes options for
 * "@ing" the Twitch chatter,
 * creating a custom command string,
 * and using different platforms for inputting the commands to their chat.
 *
 * */
function ExportBotCommands() {
	const dispatch = useDispatch()
	const { data } = useChannelData()
	const [method, setMethod] = useState<TCommandMethod>("nightbot")
	const [commandStrategy, setCommandStrategy] = useState<"edit" | "add">("edit")
	const [includeUser, setIncludeUser] = useState(true)
	const { gameId, view } = useChannelView()

	const { data: allKitBases } = trpc.kits.bases.listByGameUrlSafeName.useQuery({ gameUrlSafeName: view })
	const allKits = [...(data?.warzoneTwoKits ?? []), ...(data?.warzoneKits ?? [])]
	const filterKits = allKits.filter((kit) => kit.base.gameId === gameId)

	if (!allKitBases) return null

	return (
		<Modal backgroundClickToClose title="EXPORT BOT COMMANDS">
			<MethodToggle method={method} setMethod={setMethod} />
			<UserIncludeToggle includeUser={includeUser} setIncludeUser={setIncludeUser} />
			<CustomTextBuilder commandStrategy={commandStrategy} method={method} />
			{method !== "dashboard" && (
				<TwitchStrategyToggle commandStrategy={commandStrategy} setCommandStrategy={setCommandStrategy} />
			)}

			<CommandsTable commandStrategy={commandStrategy} includeUser={includeUser} kits={filterKits} method={method} />

			<Button
				design="transparent"
				onClick={() => dispatch(setModal({ type: "", data: "" }))}
				style={{
					position: "absolute",
					bottom: "24px",
					left: "50%",
					transform: "translate(-50%)",
					backgroundColor: colors.middle
				}}
				text="BACK"
			/>
		</Modal>
	)
}

export default ExportBotCommands
