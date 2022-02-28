import colors from "@Colors"
import { TCommandMethod } from "@kittr/types/types"
import { IKit } from "@kittr/types/kits"
import Toast from "@Components/shared/Toast"
import { useChannelData, useChannelView } from "@Redux/slices/dashboard/selectors"
import { useState } from "react"
import * as Styled from "./style"

interface Props {
	/** Array of kits to render in the table. */
	kits: Array<Omit<IKit, "options">>
	/** Include master commands for this game. Ex: !loadout and !loadouts for Warzone. */
	includeMasterCommands?: boolean
	/** Method which the user will be utilizing for adding their commands. */
	method: TCommandMethod
	/** If the user is using updating commands using chat, this is the bot command that they are going to use to perform the action. */
	commandStrategy: "edit" | "add"
	/** If the user wants to use include an "$(touser)" in their commands. */
	includeUser: boolean
}

/** Render the list of commands for the kits of the user. */
const CommandsTable = ({ kits, includeMasterCommands = true, method, commandStrategy, includeUser }: Props) => {
	const { games, urlSafeName, displayName: channelDisplayName } = useChannelData()
	const { gameId } = useChannelView()
	const [copyNotification, setCopyNotification] = useState(false)
	const isDashboard = method === "dashboard"
	const dashboardStrategy = commandStrategy === "edit" ? "!editcom" : "!addcom"
	const channelElementsStrategy = commandStrategy === "edit" ? "!command edit" : "!command add"

	let rootUrl = new URL(window.location.origin.toString()).host.replace("www.", "")

	const createNightbotPrefix = (code: string): string => `${dashboardStrategy} !${code}`
	const createChannelElementsPrefix = (code: string): string => `${channelElementsStrategy} !${code}`
	const createUserString = (): string => (includeUser ? " $(touser)" : "")
	const commandBase = `${rootUrl}/c/${urlSafeName}/warzone`
	const currentStringTemplate = games.find((elem) => elem.id === gameId)?.commandString || ""

	const createCommandString = (displayName: string, baseTitle: string, code: string): string => {
		let customizedString = ""

		if (currentStringTemplate?.length > 0) {
			customizedString = currentStringTemplate
				.replace("{{link}}", baseTitle ? `${commandBase}/?k=${baseTitle}` : `${commandBase}`)
				.replace("{{weapon name}}", displayName)
				.replace("{{channeler name}}", channelDisplayName)
		} else if (baseTitle) {
			customizedString = `${commandBase}/?k=${baseTitle}`
		} else {
			customizedString = `${commandBase}`
		}

		switch (method) {
			case "nightbot":
				return `${createNightbotPrefix(code)}${createUserString()} ${customizedString}`
			case "dashboard":
				return `${createUserString()} ${customizedString}`
			case "channel-elements":
				return `${createChannelElementsPrefix(code)}${createUserString()} ${customizedString}`
		}
	}

	const copyToClipboard = (string: string) => {
		navigator.clipboard.writeText(string)
		setCopyNotification(true)
	}

	return (
		<div style={{ marginBottom: "64px" }}>
			<Styled.SubText style={{ marginTop: "64px" }}>
				Note - The command will include all kits using the same Kit Base.
			</Styled.SubText>

			<Styled.HorizFlex style={{ marginTop: "28px", borderBottom: `1px solid ${colors.lightest}` }}>
				<Styled.ListingHeader style={{ width: "200px" }}>COMMAND</Styled.ListingHeader>
				<Styled.ListingHeader style={{ flex: "1" }}>
					{isDashboard ? "MESSAGE" : "JUST PASTE THIS IN CHAT"}
				</Styled.ListingHeader>
			</Styled.HorizFlex>
			{includeMasterCommands && (
				<>
					<Styled.HorizFlex style={{ marginTop: "28px", borderBottom: `1px solid ${colors.lightest}` }}>
						<Styled.CommandTitle
							style={{
								marginBottom: "20px",
								width: "200px",
								cursor: isDashboard ? "pointer" : "initial",
								color: isDashboard ? colors.lighter : ""
							}}
							onClick={() => isDashboard && copyToClipboard(`!loadout`)}
						>
							!loadout
							{isDashboard && (
								<Styled.ImageContainer onClick={() => !isDashboard && copyToClipboard(`!loadout`)} style={{ top: 0 }}>
									<img src="/media/icons/clipboard.svg" alt="Click to Copy" width={13} height={17} />
								</Styled.ImageContainer>
							)}
						</Styled.CommandTitle>
						<Styled.CommandContent
							onClick={() => copyToClipboard(createCommandString("loadout", "", "loadout"))}
							style={{ marginBottom: "20px", flex: "1" }}
						>
							{createCommandString("loadout", "", "loadout")}
						</Styled.CommandContent>
						<Styled.ImageContainer onClick={() => copyToClipboard(createCommandString("loadout", "", "loadout"))}>
							<img src="/media/icons/clipboard.svg" alt="Click to Copy" width={13} height={17} />
						</Styled.ImageContainer>
					</Styled.HorizFlex>
					<Styled.HorizFlex style={{ marginTop: "28px", borderBottom: `1px solid ${colors.lightest}` }}>
						<Styled.CommandTitle
							style={{
								marginBottom: "20px",
								width: "200px",
								cursor: isDashboard ? "pointer" : "initial",
								color: isDashboard ? colors.lighter : ""
							}}
							onClick={() => isDashboard && copyToClipboard(`!loadouts`)}
						>
							!loadouts
							{isDashboard && (
								<Styled.ImageContainer onClick={() => !isDashboard && copyToClipboard(`!loadouts`)} style={{ top: 0 }}>
									<img src="/media/icons/clipboard.svg" alt="Click to Copy" width={13} height={17} />
								</Styled.ImageContainer>
							)}
						</Styled.CommandTitle>
						<Styled.CommandContent
							onClick={() => copyToClipboard(createCommandString("loadouts", "", "loadouts"))}
							style={{ marginBottom: "20px", flex: "1" }}
						>
							{createCommandString("loadouts", "", "loadouts")}
						</Styled.CommandContent>
						<Styled.ImageContainer onClick={() => copyToClipboard(createCommandString("loadouts", "", "loadouts"))}>
							<img src="/media/icons/clipboard.svg" alt="Click to Copy" width={13} height={17} />
						</Styled.ImageContainer>
					</Styled.HorizFlex>
				</>
			)}
			{kits &&
				kits
					// Only uniques
					.filter((v, i, a) => a.findIndex((t) => t.base.displayName === v.base.displayName) === i)
					.map((elem) => {
						const baseTitle = `${elem.base.displayName.replace(/ /g, "-")}`

						return elem.base.commandCodes.map((code: string) => {
							return (
								<Styled.HorizFlex
									key={code}
									style={{ marginTop: "28px", borderBottom: `1px solid ${colors.lightest}` }}
								>
									<Styled.CommandTitle
										style={{
											marginBottom: "20px",
											width: "200px",
											cursor: isDashboard ? "pointer" : "initial",
											color: isDashboard ? colors.lighter : ""
										}}
										onClick={() => isDashboard && copyToClipboard(`!${code}`)}
									>
										!{code}
										{isDashboard && (
											<Styled.ImageContainer onClick={() => copyToClipboard(`!${code}`)} style={{ top: 0 }}>
												<img src="/media/icons/clipboard.svg" alt="Click to Copy" width={13} height={17} />
											</Styled.ImageContainer>
										)}
									</Styled.CommandTitle>
									<Styled.CommandContent
										onClick={() => copyToClipboard(createCommandString(elem.base.displayName, baseTitle, code))}
										style={{ marginBottom: "20px", flex: "1" }}
									>
										{createCommandString(elem.base.displayName, baseTitle, code)}
									</Styled.CommandContent>
									<Styled.ImageContainer
										onClick={() => copyToClipboard(createCommandString(elem.base.displayName, baseTitle, code))}
									>
										<img src="/media/icons/clipboard.svg" alt="Click to Copy" width={13} height={17} />
									</Styled.ImageContainer>
								</Styled.HorizFlex>
							)
						})
					})}
			<Toast visible={copyNotification} setVisibility={setCopyNotification}>
				<img src="/media/icons/check-mark.svg" alt="Check Mark" width={16} height={11} />
				<p style={{ marginLeft: "44px" }}>Link copied to clipboard</p>
			</Toast>
		</div>
	)
}

export default CommandsTable
