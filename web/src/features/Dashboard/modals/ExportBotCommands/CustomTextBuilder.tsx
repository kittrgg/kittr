import colors from "@Colors"
import Button from "@Components/shared/Button"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { setModal } from "@Redux/slices/dashboard"
import { useManagerRole, useChannelData, useChannelView } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { getToken } from "@Services/firebase/auth/getToken"
import { paragraph } from "@Styles/typography"
import { useEffect, useState } from "react"
import styled from "styled-components"
import * as Styled from "./style"
import fetch from "@Fetch"

interface Props {
	/** Method which the user will be utilizing for adding their commands */
	method: TCommandMethod
	/** Strategy for Twitch being employed by the user. */
	commandStrategy: "edit" | "add"
}

/**
 * With this text input, user's can create a custom command string that gets persisted across all of the channel's managers.
 *
 * Note: Editors should not be able to access this text box!
 */
const CustomTextBuilder = ({ commandStrategy, method }: Props) => {
	const dispatch = useDispatch()
	const role = useManagerRole()
	const { gameId: activeGame } = useChannelView()
	const initialString = useChannelData().games.find((game) => game.id === activeGame)?.commandString || ""
	const channelData = useChannelData()
	const [userString, setUserString] = useState(initialString)

	const nightbotStrategy = commandStrategy === "edit" ? "!editcom" : "!addcom"
	const channelElementsStrategy = commandStrategy === "edit" ? "!command edit" : "!command add"

	const { mutate, isLoading } = useDashboardMutator(async () => {
		try {
			const result = await fetch.put({
				url: `/api/channel/meta/botCommandString`,
				headers: { authorization: `Bearer: ${await getToken()}` },
				body: { commandString: userString, channelId: channelData._id, gameId: activeGame }
			})

			if (result) {
				return
			}
		} catch (error) {
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	})

	useEffect(() => {
		setUserString(initialString)
	}, [initialString])

	return (
		<Styled.HorizFlex>
			<div style={{ marginRight: "64px" }}>
				<Styled.ToggleDescription style={{ display: "inline", marginRight: "20px" }}>
					Use custom text?
				</Styled.ToggleDescription>
				<Styled.SubText style={{ display: "inline" }}>Optional</Styled.SubText>
				{role === "Editor" ? (
					<Styled.SubText>
						Only Owners and Administrators can edit this field. If you think this text needs a change, let someone with
						that role know.
					</Styled.SubText>
				) : (
					<>
						<Styled.SubText>
							Use curly brackets for shortcodes. For example, {"{{channeler name}}"} will be replaced with "
							{channelData.displayName}".
						</Styled.SubText>
						<Styled.SubText>Available shortcodes:</Styled.SubText>
						<div>
							<Styled.SubText>
								<strong style={{ fontWeight: 700 }}>{"{{link}}"} (Required)</strong>
							</Styled.SubText>
							<Styled.SubText>{"{{weapon name}}"}</Styled.SubText>
							<Styled.SubText>{"{{channeler name}}"}</Styled.SubText>
						</div>
					</>
				)}
			</div>
			{role === "Editor" ? (
				<UserStringContainer>{userString}</UserStringContainer>
			) : (
				<div style={{ position: "relative", width: "60%", marginBottom: "40px" }}>
					<TextArea
						method={method}
						value={userString}
						onChange={(e) => setUserString(e.target.value)}
						data-cy="custom-text-builder"
					/>
					{method !== "dashboard" && (
						<TextAreaLead>{`${
							method !== "nightbot" ? nightbotStrategy : channelElementsStrategy
						} !example`}</TextAreaLead>
					)}
					<Styled.HorizFlex style={{ alignItems: "center", marginTop: "12px" }}>
						{userString?.length > 0 && !userString.includes("{{link}}") && (
							<ShortcodeWarning>Must include {"{{link}}"}</ShortcodeWarning>
						)}
						<Button
							design="white"
							text={isLoading ? "..." : "SAVE"}
							disabled={
								userString?.length === 0
									? false
									: isLoading || !userString.includes("{{link}}") || initialString === userString
							}
							onClick={mutate}
							style={{ marginLeft: "auto", padding: "6px 32px", fontSize: "16px" }}
							dataCy="save-custom-string"
						/>
					</Styled.HorizFlex>
				</div>
			)}
		</Styled.HorizFlex>
	)
}

export default CustomTextBuilder

// Styled Components

const TextArea = styled.textarea<{ method: TCommandMethod }>`
	width: 100%;
	height: 150px;
	padding: 16px 20px;
	background-color: ${colors.darker};
	color: ${colors.white};
	border-radius: 6px;
	${paragraph};
	text-indent: ${(props) =>
		props.method === "nightbot" ? "276px" : props.method === "channel-elements" ? "208px" : "0px"};
	resize: none;
	line-height: 150%;
	outline: none;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${colors.lightest};
		border: 5px solid transparent;
	}
`

const TextAreaLead = styled.div`
	position: absolute;
	top: 18px;
	left: 20px;
	color: ${colors.lighter};
	${paragraph};
`

const ShortcodeWarning = styled.p`
	margin: 0 auto;
	margin-right: 8px;
	color: ${colors.red};
`

const UserStringContainer = styled.div`
	position: relative;
	width: 60%;
	height: 70px;
	margin-bottom: 60px;
	padding: 16px 20px;
	border-radius: 6px;
	background-color: ${colors.darker};
	color: ${colors.lighter};
	cursor: not-allowed;
`
