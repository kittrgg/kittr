import colors from "@Colors"
import MultiButton from "@Components/shared/MultiButton"
import { Dispatch, SetStateAction } from "react"
import * as Styled from "./style"

interface Props {
	/** User option to include $(touser) in the command. */
	includeUser: boolean
	/** Toggling boolean to include or exclude $(touser) in the command. */
	setIncludeUser: Dispatch<SetStateAction<boolean>>
}

/** In Twitch chat, a user can be notified if they call the command. Turning this option on allows for that. */
const IncludeUserToggle = ({ includeUser, setIncludeUser }: Props) => {
	return (
		<Styled.HorizFlex>
			<Styled.ToggleDescription>
				Include username of command requester in Nightbot or Channel Elements response?
			</Styled.ToggleDescription>
			<Styled.ToggleContainer style={{ marginLeft: "300px" }} flexBasis={400}>
				<MultiButton
					wrapperBackgroundColor={colors.darker}
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
	)
}

export default IncludeUserToggle
