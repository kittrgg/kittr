import colors from '@Colors';
import { Button, Modal, Spinner } from '@Components/shared';
import { setModal } from '@Redux/slices/dashboard';
import { useChannelData, useModal } from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import { paragraph } from '@Styles/typography';
import styled from 'styled-components';
import { trpc } from '@/lib/trpc';

function DeleteManager() {
  const dispatch = useDispatch();
  const { data: channelData, refetch: refetchDashboard } = useChannelData();
  const { data } = useModal();

  const { mutate: demote, isLoading: isDemoting } =
    trpc.channels.managers.demote.useMutation({
      onSuccess: () => {
        dispatch(setModal({ type: '', data: {} }));
        refetchDashboard();
      },
      onError: () => {
        dispatch(setModal({ type: 'Error Notification', data: {} }));
      },
    });

  const { mutate: promote, isLoading: isPromoting } =
    trpc.channels.managers.promote.useMutation({
      onSuccess: () => {
        dispatch(setModal({ type: '', data: {} }));
        refetchDashboard();
      },
      onError: () => {
        dispatch(setModal({ type: 'Error Notification', data: {} }));
      },
    });

  if (isPromoting || isDemoting)
    return (
      <Modal backgroundClickToClose title="MAKING THE SWITCH...">
        <Spinner height="50px" width="100%" />
      </Modal>
    );

  if (data.role == 'ADMIN') {
    return (
      <Modal backgroundClickToClose title="EXITING THE CIRCLE OF TRUST?">
        <Paragraph style={{ marginBottom: '24px' }}>
          ARE YOU SURE YOU WANT TO DEMOTE
        </Paragraph>
        <Paragraph>{data.displayName}</Paragraph>
        <Paragraph style={{ marginBottom: '24px' }}>{data.email}</Paragraph>
        <Paragraph>to EDITOR?</Paragraph>
        <Warning>
          This action will remove many of their abilities. Check the roles grid
          for more.
        </Warning>
        <RowFlex>
          <Button
            design="transparent"
            onClick={() => dispatch(setModal({ type: '', data: {} }))}
            text="NO, KEEP THE SAME"
          />
          <Button
            design="white"
            onClick={async () =>
              demote({
                managerIdToDemote: data.id,
                channelId: channelData?.id!,
              })
            }
            style={{ marginLeft: '32px' }}
            text="YES, DEMOTE THEM"
          />
        </RowFlex>
      </Modal>
    );
  }

  return (
    <Modal title="ENTERING THE CIRCLE OF TRUST?">
      <Paragraph style={{ marginBottom: '24px' }}>
        ARE YOU SURE YOU WANT TO PROMOTE
      </Paragraph>
      <Paragraph>{data.displayName}</Paragraph>
      <Paragraph style={{ marginBottom: '24px' }}>{data.email}</Paragraph>
      <Paragraph>to ADMINISTRATOR?</Paragraph>
      <Warning style={{ color: colors.green }}>
        This action will grant them new abilities. Check the roles grid for
        more.
      </Warning>
      <RowFlex>
        <Button
          design="transparent"
          onClick={() => dispatch(setModal({ type: '', data: {} }))}
          text="NO, KEEP THE SAME"
        />
        <Button
          design="white"
          onClick={async () =>
            promote({
              managerIdToPromote: data.id,
              channelId: channelData?.id!,
            })
          }
          style={{ marginLeft: '32px' }}
          text="YES, PROMOTE THEM"
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
  margin-top: 64px;
`;
