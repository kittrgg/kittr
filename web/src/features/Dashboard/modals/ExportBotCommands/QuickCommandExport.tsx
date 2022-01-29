import colors from "@Colors"
import { Button, Modal, MultiButton } from "@Components/shared"
import CommandsTable from "@Features/Dashboard/modals/ExportBotCommands/CommandsTable"
import { setModal } from "@Redux/slices/dashboard"
import { useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { useState } from "react"
import * as Styled from "./style"

const QuickCommandExport = ({ ...props }) => {
	const dispatch = useDispatch()
	const { data } = useModal()
	const [includeUser, setIncludeUser] = useState(true)
	const [method, setMethod] = useState<TCommandMethod>("nightbot")
	const [commandStrategy, setCommandStrategy] = useState<"edit" | "add">("edit")

	return (
		<Modal backgroundClickToClose title="QUICK COMMAND EXPORT">
			<Styled.HorizFlex>
				<Styled.ToggleDescription>Include username of command requester in Nightbot response?</Styled.ToggleDescription>
				<Styled.ToggleContainer flexBasis={600}>
					<MultiButton
						wrapperBackgroundColor={colors.darker}
						activeValue={method}
						values={[
							{
								text: "NIGHTBOT",
								value: "nightbot" as TCommandMethod,
								backgroundColor: colors.nightbotBlue
							},
							{
								text: "CHANNEL ELEMENTS",
								value: "channel-elements" as TCommandMethod,
								backgroundColor: colors.channelElementsBlue
							}
						]}
						onClick={(elem) => setMethod(elem.value)}
					/>
				</Styled.ToggleContainer>
			</Styled.HorizFlex>
			<Styled.HorizFlex>
				<Styled.ToggleDescription>Include username of command requester in Nightbot response?</Styled.ToggleDescription>
				<Styled.ToggleContainer flexBasis={250}>
					<MultiButton
						activeValue={includeUser ? "YUP" : "NOPE"}
						values={[
							{
								text: "YUP"
							},
							{
								text: "NOPE"
							}
						]}
						onClick={() => setIncludeUser(!includeUser)}
						dataCy="user-toggle"
					/>
				</Styled.ToggleContainer>
			</Styled.HorizFlex>
			<div style={{ width: "50%", margin: "0 auto" }}>
				<MultiButton
					activeValue={commandStrategy}
					values={[
						{
							text: "EDIT COMMAND",
							value: "edit"
						},
						{
							text: "ADD COMMAND",
							value: "add"
						}
					]}
					onClick={(e) => setCommandStrategy(e.value)}
					dataCy="command-toggle"
				/>
			</div>
			<CommandsTable
				kits={data}
				includeMasterCommands={false}
				method={method}
				commandStrategy={commandStrategy}
				includeUser={includeUser}
			/>
			<Button
				design="transparent"
				text="BACK"
				onClick={() => dispatch(setModal({ type: "", data: "" }))}
				style={{
					margin: "24px auto",
					marginBottom: "0",
					backgroundColor: colors.middle
				}}
			/>
		</Modal>
	)
}

export default QuickCommandExport
