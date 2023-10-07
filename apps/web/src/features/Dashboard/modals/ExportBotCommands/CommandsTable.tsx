import colors from '@Colors';
import Toast from '@Components/shared/Toast';
import { useDashboardChannel } from '@Hooks/api/useDashboardChannel';
import { useChannelView } from '@Redux/slices/dashboard/selectors';
import type {
	WarzoneCommandCode,
	WarzoneKit,
	WarzoneKitBase,
} from '@kittr/prisma';
import type { TCommandMethod } from '@kittr/types';
import { useState } from 'react';
import * as Styled from './style';

interface KitBaseWithCodes extends WarzoneKitBase {
	commandCodes: WarzoneCommandCode[];
}

interface FullKit extends WarzoneKit {
	base: KitBaseWithCodes;
}

interface Props {
	/** Array of kits to render in the table. */
	kits: Omit<FullKit, 'options'>[];
	/** Include master commands for this game. Ex: !loadout and !loadouts for Warzone. */
	includeMasterCommands?: boolean;
	/** Method which the user will be utilizing for adding their commands. */
	method: TCommandMethod;
	/** If the user is using updating commands using chat, this is the bot command that they are going to use to perform the action. */
	commandStrategy: 'add' | 'edit';
	/** If the user wants to use include an "$(touser)" in their commands. */
	includeUser: boolean;
}

/** Render the list of commands for the kits of the user. */
function CommandsTable({
	kits,
	includeMasterCommands = true,
	method,
	commandStrategy,
	includeUser,
}: Props) {
	const { data } = useDashboardChannel();
	const { gameId, view } = useChannelView();
	const [copyNotification, setCopyNotification] = useState(false);
	const isDashboard = method === 'dashboard';
	const dashboardStrategy = commandStrategy === 'edit' ? '!editcom' : '!addcom';
	const channelElementsStrategy =
		commandStrategy === 'edit' ? '!command edit' : '!command add';

	const rootUrl = new URL(window.location.origin.toString()).host.replace(
		'www.',
		'',
	);

	const createNightbotPrefix = (code: string): string =>
		`${dashboardStrategy} !${code}`;
	const createChannelElementsPrefix = (code: string): string =>
		`${channelElementsStrategy} !${code}`;
	const createUserString = (): string => (includeUser ? ' $(touser)' : '');
	const commandBase = `${rootUrl}/c/${data?.urlSafeName}${
		view === 'wz2' ? '/wz2' : '/warzone'
	}`;
	const currentStringTemplate =
		data?.customGameCommands.find((elem) => elem.gameId === gameId)?.command ||
		'';

	const createCommandString = (
		displayName: string,
		baseTitle: string,
		code: string,
	): string => {
		let customizedString = '';

		if (currentStringTemplate.length > 0) {
			customizedString = currentStringTemplate
				.replace(
					'{{link}}',
					baseTitle ? `${commandBase}/?k=${baseTitle}` : `${commandBase}`,
				)
				.replace('{{weapon name}}', displayName)
				.replace('{{player name}}', data?.displayName ?? '');
		} else if (baseTitle) {
			customizedString = `${commandBase}/?k=${baseTitle}`;
		} else {
			customizedString = `${commandBase}`;
		}

		switch (method) {
			case 'nightbot':
				return `${createNightbotPrefix(
					code,
				)}${createUserString()} ${customizedString}`;
			case 'dashboard':
				return `${createUserString()} ${customizedString}`;
			case 'channel-elements':
				return `${createChannelElementsPrefix(
					code,
				)}${createUserString()} ${customizedString}`;
		}
	};

	const copyToClipboard = (string: string) => {
		navigator.clipboard.writeText(string);
		setCopyNotification(true);
	};

	return (
		<div style={{ marginBottom: '64px' }}>
			<Styled.SubText style={{ marginTop: '64px' }}>
				Note - The command will include all kits using the same Kit Base.
			</Styled.SubText>

			<Styled.HorizFlex
				style={{
					marginTop: '28px',
					borderBottom: `1px solid ${colors.lightest}`,
				}}
			>
				<Styled.ListingHeader style={{ width: '200px' }}>
					COMMAND
				</Styled.ListingHeader>
				<Styled.ListingHeader style={{ flex: '1' }}>
					{isDashboard ? 'MESSAGE' : 'JUST PASTE THIS IN CHAT'}
				</Styled.ListingHeader>
			</Styled.HorizFlex>
			{includeMasterCommands ? (
				<>
					<Styled.HorizFlex
						style={{
							marginTop: '28px',
							borderBottom: `1px solid ${colors.lightest}`,
						}}
					>
						<Styled.CommandTitle
							onClick={() => isDashboard && copyToClipboard('!loadout')}
							style={{
								marginBottom: '20px',
								width: '200px',
								cursor: isDashboard ? 'pointer' : 'initial',
								color: isDashboard ? colors.lighter : '',
							}}
						>
							!loadout
							{isDashboard ? (
								<Styled.ImageContainer
									onClick={() => !isDashboard && copyToClipboard('!loadout')}
									style={{ top: 0 }}
								>
									<img
										alt="Click to Copy"
										height={17}
										src="/media/icons/clipboard.svg"
										width={13}
									/>
								</Styled.ImageContainer>
							) : null}
						</Styled.CommandTitle>
						<Styled.CommandContent
							onClick={() =>
								copyToClipboard(createCommandString('loadout', '', 'loadout'))
							}
							style={{ marginBottom: '20px', flex: '1' }}
						>
							{createCommandString('loadout', '', 'loadout')}
						</Styled.CommandContent>
						<Styled.ImageContainer
							onClick={() =>
								copyToClipboard(createCommandString('loadout', '', 'loadout'))
							}
						>
							<img
								alt="Click to Copy"
								height={17}
								src="/media/icons/clipboard.svg"
								width={13}
							/>
						</Styled.ImageContainer>
					</Styled.HorizFlex>
					<Styled.HorizFlex
						style={{
							marginTop: '28px',
							borderBottom: `1px solid ${colors.lightest}`,
						}}
					>
						<Styled.CommandTitle
							onClick={() => isDashboard && copyToClipboard('!loadouts')}
							style={{
								marginBottom: '20px',
								width: '200px',
								cursor: isDashboard ? 'pointer' : 'initial',
								color: isDashboard ? colors.lighter : '',
							}}
						>
							!loadouts
							{isDashboard ? (
								<Styled.ImageContainer
									onClick={() => !isDashboard && copyToClipboard('!loadouts')}
									style={{ top: 0 }}
								>
									<img
										alt="Click to Copy"
										height={17}
										src="/media/icons/clipboard.svg"
										width={13}
									/>
								</Styled.ImageContainer>
							) : null}
						</Styled.CommandTitle>
						<Styled.CommandContent
							onClick={() =>
								copyToClipboard(createCommandString('loadouts', '', 'loadouts'))
							}
							style={{ marginBottom: '20px', flex: '1' }}
						>
							{createCommandString('loadouts', '', 'loadouts')}
						</Styled.CommandContent>
						<Styled.ImageContainer
							onClick={() =>
								copyToClipboard(createCommandString('loadouts', '', 'loadouts'))
							}
						>
							<img
								alt="Click to Copy"
								height={17}
								src="/media/icons/clipboard.svg"
								width={13}
							/>
						</Styled.ImageContainer>
					</Styled.HorizFlex>
				</>
			) : null}
			{kits
				? kits
						// Only uniques
						.filter(
							(v, i, a) =>
								a.findIndex(
									(t) => t.base.displayName === v.base.displayName,
								) === i,
						)
						.map((elem) => {
							const baseTitle = `${elem.base.displayName.replace(/ /g, '-')}`;

							return elem.base.commandCodes.map((code) => {
								return (
									<Styled.HorizFlex
										key={code.id}
										style={{
											marginTop: '28px',
											borderBottom: `1px solid ${colors.lightest}`,
										}}
									>
										<Styled.CommandTitle
											onClick={() =>
												isDashboard && copyToClipboard(`!${code.code}`)
											}
											style={{
												marginBottom: '20px',
												width: '200px',
												cursor: isDashboard ? 'pointer' : 'initial',
												color: isDashboard ? colors.lighter : '',
											}}
										>
											!{code.code}
											{isDashboard ? (
												<Styled.ImageContainer
													onClick={() => copyToClipboard(`!${code.code}`)}
													style={{ top: 0 }}
												>
													<img
														alt="Click to Copy"
														height={17}
														src="/media/icons/clipboard.svg"
														width={13}
													/>
												</Styled.ImageContainer>
											) : null}
										</Styled.CommandTitle>
										<Styled.CommandContent
											onClick={() =>
												copyToClipboard(
													createCommandString(
														elem.base.displayName,
														baseTitle,
														code.code,
													),
												)
											}
											style={{ marginBottom: '20px', flex: '1' }}
										>
											{createCommandString(
												elem.base.displayName,
												baseTitle,
												code.code,
											)}
										</Styled.CommandContent>
										<Styled.ImageContainer
											onClick={() =>
												copyToClipboard(
													createCommandString(
														elem.base.displayName,
														baseTitle,
														code.code,
													),
												)
											}
										>
											<img
												alt="Click to Copy"
												height={17}
												src="/media/icons/clipboard.svg"
												width={13}
											/>
										</Styled.ImageContainer>
									</Styled.HorizFlex>
								);
							});
						})
				: null}
			<Toast setVisibility={setCopyNotification} visible={copyNotification}>
				<img
					alt="Check Mark"
					height={11}
					src="/media/icons/check-mark.svg"
					width={16}
				/>
				<p style={{ marginLeft: '44px' }}>Link copied to clipboard</p>
			</Toast>
		</div>
	);
}

export default CommandsTable;
