import colors from "@Colors"
import { TCommandMethod } from "@kittr/types"
import MultiButton from "@Components/shared/MultiButton"
import { Dispatch, SetStateAction } from "react"
import * as Styled from "./style"

interface Props {
	/** Workflows that users can utilize to add their commands to their channel */
	method: TCommandMethod
	/** React setter that allows the user to choose their exporting method. */
	setMethod: Dispatch<SetStateAction<TCommandMethod>>
}

/** Allows the user to select the manner in which they will be adding their commands to their channel. */
const MethodSelector = ({ method, setMethod }: Props) => {
	return (
		<Styled.HorizFlex>
			<div>
				<Styled.ToggleDescription>
					Are you editing your commands in chat for Nightbot, in chat for ChannelElements, or on one of their
					dashboards?
				</Styled.ToggleDescription>
				<Styled.SubText>In chat is way easier...less clicking & less work.</Styled.SubText>
			</div>
			<Styled.ToggleContainer flexBasis={1000}>
				<MultiButton
					wrapperBackgroundColor={colors.darker}
					activeValue={method}
					infoLabels={["< 2 min", "< 2 min", "8 min"]}
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
						},
						{
							text: "DASHBOARD",
							value: "dashboard" as TCommandMethod,
							backgroundColor: colors.twitchPurple
						}
					]}
					onClick={(elem) => setMethod(elem.value)}
				/>
			</Styled.ToggleContainer>
		</Styled.HorizFlex>
	)
}

export default MethodSelector
