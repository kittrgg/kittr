import colors from "@Colors"
import MultiButton from "@Components/shared/MultiButton"
import { Dispatch, SetStateAction } from "react"

interface Props {
	/** Twitch command strategies to add kittr commands to chat */
	commandStrategy: "edit" | "add"
	/** Set the user's Twitch strategy */
	setCommandStrategy: Dispatch<SetStateAction<"edit" | "add">>
}

const TwitchStrategyToggle = ({ commandStrategy, setCommandStrategy }: Props) => {
	return (
		<div style={{ width: "50%", margin: "0 auto" }}>
			<MultiButton
				wrapperBackgroundColor={colors.darker}
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
			/>
		</div>
	)
}

export default TwitchStrategyToggle
