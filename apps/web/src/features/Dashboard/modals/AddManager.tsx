import colors from '@Colors';
import { Button, Modal, SVG, TextInput } from '@Components/shared';
import { useDashboardChannel } from '@Hooks/api/useDashboardChannel';
import { setModal } from '@Redux/slices/dashboard';
import { useChannelData } from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import { paragraph } from '@Styles/typography';
import type { ChannelManagerRoles } from '@kittr/prisma';
import { useState } from 'react';
import styled from 'styled-components';
import { trpc } from '@/lib/trpc';

/** Modal for adding a manager to a channel. */
function AddManager() {
  const dispatch = useDispatch();
  const { data } = useChannelData();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<ChannelManagerRoles>('EDITOR');
  const [error, setError] = useState('');
  const { refetch: refetchChannel } = useDashboardChannel();

  const { mutate, isLoading } = trpc.channels.managers.create.useMutation({
    onSuccess: () => {
      dispatch(setModal({ type: '', data: {} }));
      refetchChannel();
    },
    onError: (error: any) => {
      setError(error.message);
    },
  });

  return (
    <Modal
      backgroundClickToClose
      title={
        <>
          ADD A NEW MANAGER
          <SVG.QuestionMark
            onClick={() =>
              dispatch(setModal({ type: 'About Account Managers', data: {} }))
            }
            style={{
              position: 'relative',
              top: '2px',
              left: '12px',
              cursor: 'pointer',
            }}
            width="24px"
          />
        </>
      }
    >
      <Wrapper>
        <Paragraph>
          Account managers can help maintain your kittr account by updating your
          kits and channel account settings for you. Typically, this role is
          fulfilled by channel moderators.
        </Paragraph>
        <Paragraph>
          Please note that your manager must already have a kittr account - and
          that you need to know their email address for it.
        </Paragraph>
      </Wrapper>
      <RowFlex>
        <ColumnFlex>
          <TextInput
            inputStyles={{ position: 'relative', top: '8px', width: '100%' }}
            label="Email Address"
            labelStyles={{ marginTop: '0', marginBottom: '24px' }}
            name="email"
            onChange={(e) => {
              setError('');
              setEmail(e.target.value);
            }}
            sublineStyles={{ padding: '0' }}
            topLabel
            type="text"
            value={email}
          />
        </ColumnFlex>
        <ColumnFlex>
          <SelectHeader>SELECT ROLE</SelectHeader>
          <Select
            data-cy="role-selector"
            onChange={(e) => {
              setError('');
              setRole(e.target.value as ChannelManagerRoles);
            }}
            style={{ width: '100%' }}
            value={role}
          >
            <option value="">-</option>
            <option value="ADMIN">Administrator</option>
            <option value="EDITOR">Editor</option>
          </Select>
        </ColumnFlex>
      </RowFlex>
      <Error>{error}</Error>
      <RowFlex>
        <Button
          design="transparent"
          onClick={() => dispatch(setModal({ type: '', data: {} }))}
          style={{ margin: '0 auto' }}
          text="Close"
        />
        <Button
          dataCy="confirm-manager-add"
          design="white"
          disabled={isLoading || !role || email.length === 0}
          onClick={async () =>
            mutate({ channelId: data?.id!, data: { email, role } })
          }
          style={{ margin: '0 auto' }}
          text={isLoading ? '...' : 'Add'}
        />
      </RowFlex>
    </Modal>
  );
}

export default AddManager;

// Styled Components

const Wrapper = styled.div`
  ${paragraph};
`;

const Paragraph = styled.p`
  margin-bottom: 32px;
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  height: 92px;
`;

const SelectHeader = styled.h3`
  ${paragraph};
  font-weight: 600;
`;

const Select = styled.select`
  appearance: none;
  background: transparent;
  background-position: 95% 50%;
  background-repeat: no-repeat;
  background-image: url('/media/select-arrow.svg');
  padding: 12px;
  padding-right: 36px;
  border: none;
  border-bottom: 1px solid ${colors.lightest};
  outline: none;
  color: ${colors.lighter};
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.2s;

  option {
    background-color: ${colors.dark};
    color: ${colors.white};
  }

  &:hover {
    background-color: ${colors.white};
    border-radius: 12px;
  }

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

const Error = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90px;
  color: ${colors.red};
  font-size: 18px;
  letter-spacing: 2px;
`;
