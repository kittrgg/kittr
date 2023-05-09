import colors from '@Colors';
import { Button, Modal, TextInput } from '@Components/shared';
import { useDashboardChannel } from '@Hooks/api/useDashboardChannel';
// Import { useManagedChannels } from "@Hooks/api/useManagedChannels"
import { setActiveView, setModal } from '@Redux/slices/dashboard';
import { useChannelData } from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import { header2 } from '@Styles/typography';
import { useSocket } from '@/pages/dashboard';
import { useState } from 'react';
import styled from 'styled-components';
import { trpc } from '@/lib/trpc';

/** Modal to allow the user to delete the channel. */
function ChannelDeleteModal() {
  const socket = useSocket();
  const dispatch = useDispatch();
  const { data: channelData } = useChannelData();
  const [input, setInput] = useState('');
  const { refetch: refetchDashboard } = useDashboardChannel();
  const { refetch } = trpc.managers.channels.list.useQuery();
  const { mutate } = trpc.channels.delete.useMutation({
    onSuccess: () => {
      socket?.emit('channelDelete', channelData?.id);
      dispatch(setActiveView({ channelId: '', view: 'Channel List' }));
      dispatch(setModal({ type: '', data: {} }));
      refetch();
      refetchDashboard();
    },
    onError: () => {
      dispatch(setModal({ type: 'Error Notification', data: {} }));
    },
  });

  return (
    <Modal
      backgroundClickToClose
      title="ARE YOU SURE YOU WANT TO DELETE YOUR CHANNEL ACCOUNT?"
    >
      <Warning>
        THIS WILL PERMANENTLY REMOVE ALL SETTINGS, GAMES, KITS, AND ASSOCIATED
        DATA.
      </Warning>
      <TextInput
        inputStyles={{ width: '100%' }}
        label="Channel Name"
        name="displayNameDelete"
        onChange={(e) => setInput(e.target.value)}
        topLabel
        type="text"
        value={input}
      />
      <FlexRow>
        <Button
          design="transparent"
          onClick={() => dispatch(setModal({ type: '', data: {} }))}
          text="NO, KEEP IT"
        />
        <Button
          design="transparent"
          disabled={channelData?.displayName !== input}
          onClick={async () => mutate({ channelId: channelData?.id ?? '' })}
          style={{ backgroundColor: colors.red }}
          text="DELETE FOREVER"
        />
      </FlexRow>
    </Modal>
  );
}

export default ChannelDeleteModal;

// Styled Components

const Warning = styled.p`
  color: ${colors.red};
  ${header2};
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
`;
