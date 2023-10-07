import colors from '@Colors';
import { Button, Modal, Spinner, TextInput } from '@Components/shared';
import { useDashboardChannel } from '@Hooks/api/useDashboardChannel';
// Import { useManagedChannels } from "@Hooks/api/useManagedChannels"
import { handleTutorialAction, setModal } from '@Redux/slices/dashboard';
import { useModal } from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import { paragraph } from '@Styles/typography';
import { useState } from 'react';
import styled from 'styled-components';
import { trpc } from '@/lib/trpc';

function CreateChannelModal() {
	const dispatch = useDispatch();
	const { data } = useModal();
	const { refetch: refetchDashboard } = useDashboardChannel();
	const { refetch } = trpc.managers.channels.list.useQuery();
	const [displayName, setDisplayName] = useState('');

	const { mutate, isLoading, error } = trpc.channels.create.useMutation({
		onMutate: (data) => {
			if (!data) {
				return Promise.reject({
					errorMessage: 'You must have a display name.',
				});
			}

			if (data.length > 26) {
				setDisplayName('');
				return Promise.reject({
					errorMessage: 'That channel name is too long. 25 characters or less.',
				});
			}
		},
		onSuccess: () => {
			dispatch(
				handleTutorialAction({
					condition: data.isTutorial,
					trueState: { type: 'Tutorial', data: { page: 3 } },
					falseState: { type: '', data: {} },
				}),
			);
			refetch();
			refetchDashboard();
		},
	});

	if (isLoading) {
		return (
			<Modal backgroundClickToClose title="">
				<Spinner style={{ width: '50px' }} />
			</Modal>
		);
	}

	return (
		<Modal backgroundClickToClose title="CREATE NEW CHANNEL">
			<TextInput
				label="Display Name"
				name="displayNameInput"
				onChange={(e) => setDisplayName(e.target.value)}
				type="text"
				value={displayName}
			/>
			<Error>{error?.message}</Error>
			<FlexRow>
				<Button
					design="transparent"
					onClick={() => dispatch(setModal({ type: '', data: '' }))}
					text="CANCEL"
				/>
				<Button
					dataCy="create-channel-button"
					design="white"
					disabled={isLoading}
					onClick={() => mutate(displayName)}
					text={isLoading ? '...' : 'CREATE'}
				/>
			</FlexRow>
		</Modal>
	);
}

export default CreateChannelModal;

// Styled Components

const Error = styled.p`
  margin-top: 32px;
  color: ${colors.red};
  ${paragraph};
  text-align: center;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;
`;
