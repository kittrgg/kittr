import colors from '@Colors';
import Button from '@Components/shared/Button';
import { setModal } from '@Redux/slices/dashboard';
import { useDispatch, useSelector } from '@Redux/store';
import { header2 } from '@Styles/typography';
import styled from 'styled-components';
import ChannelDeleteModal from '../../modals/ChannelDelete';

const Container = styled.div``;

const Header = styled.p`
  margin-top: 64px;
  margin-bottom: 20px;
  color: ${colors.red};
  ${header2};
`;

const Warning = styled.p`
  margin-bottom: 24px;
  color: ${colors.red};
  font-family: 18px;
  font-weight: 600;
  letter-spacing: 3px;
`;

/** Allows the user to delete the channel. Only available for owners. */
function ChannelDeleter({ ...props }) {
	const dispatch = useDispatch();
	const modalType = useSelector((state) => state.dashboard.modal.type);

	return (
		<>
			{modalType === 'Channel Deleter' && <ChannelDeleteModal />}
			<Container>
				<Header>DANGER ZONE</Header>
				<Warning>
					You only want to use this button if you want to delete your channel.
					Serious stuff.
				</Warning>
				<Button
					dataCy="channel-delete"
					design="white"
					onClick={() =>
						dispatch(setModal({ type: 'Channel Deleter', data: {} }))
					}
					style={{ backgroundColor: colors.red }}
					text="DELETE THIS CHANNEL"
				/>
			</Container>
		</>
	);
}

export default ChannelDeleter;
