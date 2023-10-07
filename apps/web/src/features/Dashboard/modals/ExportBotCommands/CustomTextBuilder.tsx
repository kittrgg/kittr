import colors from '@Colors';
import Button from '@Components/shared/Button';
import { setModal } from '@Redux/slices/dashboard';
import {
	useChannelData,
	useChannelView,
	useManagerRole,
} from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import { paragraph } from '@Styles/typography';
import type { TCommandMethod } from '@kittr/types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as Styled from './style';
import { trpc } from '@/lib/trpc';

interface Props {
	/** Method which the user will be utilizing for adding their commands */
	method: TCommandMethod;
	/** Strategy for Twitch being employed by the user. */
	commandStrategy: 'add' | 'edit';
}

/**
 * With this text input, user's can create a custom command string that gets persisted across all of the channel's managers.
 *
 * Note: Editors should not be able to access this text box!
 */
function CustomTextBuilder({ commandStrategy, method }: Props) {
	const dispatch = useDispatch();
	const role = useManagerRole();
	const { gameId: activeGame } = useChannelView();
	const { data, refetch: refetchChannel } = useChannelData();
	const initialCode = data?.customGameCommands.find(
		(code) => code.gameId === activeGame,
	);
	const [userString, setUserString] = useState(initialCode?.command);

	const nightbotStrategy = commandStrategy === 'edit' ? '!editcom' : '!addcom';
	const channelElementsStrategy =
		commandStrategy === 'edit' ? '!command edit' : '!command add';

	const { mutate, isLoading } = trpc.channels[
		'command-strings'
	].upsert.useMutation({
		onError: () => {
			dispatch(setModal({ type: 'Error Notification', data: {} }));
			refetchChannel();
		},
	});

	useEffect(() => {
		setUserString(initialCode?.command);
	}, [initialCode]);

	return (
		<Styled.HorizFlex>
			<div style={{ marginRight: '64px' }}>
				<Styled.ToggleDescription
					style={{ display: 'inline', marginRight: '20px' }}
				>
					Use custom text?
				</Styled.ToggleDescription>
				<Styled.SubText style={{ display: 'inline' }}>Optional</Styled.SubText>
				{role === 'EDITOR' ? (
					<Styled.SubText>
						Only Owners and Administrators can edit this field. If you think
						this text needs a change, let someone with that role know.
					</Styled.SubText>
				) : (
					<>
						<Styled.SubText>
							Use curly brackets for shortcodes. For example,{' '}
							{'{{player name}}'} will be replaced with "{data?.displayName}".
						</Styled.SubText>
						<Styled.SubText>Available shortcodes:</Styled.SubText>
						<div>
							<Styled.SubText>
								<strong style={{ fontWeight: 700 }}>
									{'{{link}}'} (Required)
								</strong>
							</Styled.SubText>
							<Styled.SubText>{'{{weapon name}}'}</Styled.SubText>
							<Styled.SubText>{'{{player name}}'}</Styled.SubText>
						</div>
					</>
				)}
			</div>
			{role === 'EDITOR' ? (
				<UserStringContainer>{userString}</UserStringContainer>
			) : (
				<div
					style={{ position: 'relative', width: '60%', marginBottom: '40px' }}
				>
					<TextArea
						data-cy="custom-text-builder"
						method={method}
						onChange={(e) => setUserString(e.target.value)}
						value={userString}
					/>
					{method !== 'dashboard' && (
						<TextAreaLead>{`${
							method !== 'nightbot' ? nightbotStrategy : channelElementsStrategy
						} !example`}</TextAreaLead>
					)}
					<Styled.HorizFlex style={{ alignItems: 'center', marginTop: '12px' }}>
						{userString?.length
							? !userString.includes('{{link}}') && (
									<ShortcodeWarning>Must include {'{{link}}'}</ShortcodeWarning>
							  )
							: null}
						<Button
							dataCy="save-custom-string"
							design="white"
							disabled={
								userString?.length === 0
									? false
									: isLoading ||
									  !userString?.includes('{{link}}') ||
									  initialCode?.command === userString
							}
							onClick={async () =>
								mutate({
									gameId: activeGame,
									commandStringId: initialCode?.id,
									channelId: data?.id!,
									newString: userString || '',
								})
							}
							style={{
								marginLeft: 'auto',
								padding: '6px 32px',
								fontSize: '16px',
							}}
							text={isLoading ? '...' : 'SAVE'}
						/>
					</Styled.HorizFlex>
				</div>
			)}
		</Styled.HorizFlex>
	);
}

export default CustomTextBuilder;

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
		props.method === 'nightbot'
			? '276px'
			: props.method === 'channel-elements'
			? '208px'
			: '0px'};
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
`;

const TextAreaLead = styled.div`
  position: absolute;
  top: 18px;
  left: 20px;
  color: ${colors.lighter};
  ${paragraph};
`;

const ShortcodeWarning = styled.p`
  margin: 0 auto;
  margin-right: 8px;
  color: ${colors.red};
`;

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
`;
