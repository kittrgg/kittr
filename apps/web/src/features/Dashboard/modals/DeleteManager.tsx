import colors from '@Colors';
import { Button, Modal, Spinner } from '@Components/shared';
import { useDashboardChannel } from '@Hooks/api/useDashboardChannel';
// Import { useManagedChannels } from "@Hooks/api/useManagedChannels"
import { useUser } from '@Hooks/useUser';
import { setActiveView, setModal } from '@Redux/slices/dashboard';
import { useChannelData, useModal } from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import { paragraph } from '@Styles/typography';
import styled from 'styled-components';
import { trpc } from '@/lib/trpc';

function DeleteManager() {
  const dispatch = useDispatch();
  const { data: channelData } = useChannelData();
  const { data } = useModal();
  const user = useUser();
  const { refetch } = trpc.managers.channels.list.useQuery();
  const { refetch: refetchChannel } = useDashboardChannel();
  const isSelf = user?.email === data.email;

  const { mutate, isLoading } = trpc.channels.managers.delete.useMutation({
    onSuccess: () => {
      dispatch(setModal({ type: '', data: {} }));

      if (isSelf) {
        refetch().finally(() =>
          dispatch(setActiveView({ channelId: '', view: 'Channel List' })),
        );
      }
      refetchChannel();
    },
    onError: () => {
      dispatch(setModal({ type: 'Error Notification', data: {} }));
    },
  });

  if (isLoading) {
    return (
      <Modal title="WAIT A MINUTE...">
        <Spinner height="50px" width="100px" />
      </Modal>
    );
  }

  return (
    <Modal backgroundClickToClose title="WAIT A MINUTE...">
      <Paragraph style={{ marginBottom: '24px' }}>
        ARE YOU SURE YOU WANT TO DELETE
      </Paragraph>
      <Paragraph>{data.displayName}</Paragraph>
      <Paragraph>{data.email}</Paragraph>
      <Warning>
        {isSelf ? 'You' : 'They'} will lose all access to this channel.
      </Warning>

      <RowFlex>
        <Button
          design="transparent"
          onClick={() => dispatch(setModal({ type: '', data: {} }))}
          text={`NO, KEEP ${isSelf ? 'MYSELF' : 'THEM'}`}
        />
        <Button
          dataCy="confirm-manager-removal"
          design="white"
          onClick={() =>
            mutate({
              channelId: channelData?.id ?? '',
              managerIdToDelete: data.id,
            })
          }
          style={{ marginLeft: '32px' }}
          text={`YES, REMOVE ${isSelf ? 'MYSELF' : 'THIS MANAGER'}`}
        />
      </RowFlex>
    </Modal>
  );
}

export default DeleteManager;

// Styled Components

const Paragraph = styled.p`
  font-size: 22px;
  letter-spacing: 2px;
  text-align: center;
`;

const Warning = styled.p`
  margin-top: 64px;
  margin-bottom: 32px;
  color: ${colors.red};
  ${paragraph};
  text-align: center;
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
