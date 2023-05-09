import colors from '@Colors';
import { Modal, Button, SVG } from '@Components/shared';
import { setModal } from '@Redux/slices/dashboard';
import { useManagerRole } from '@Redux/slices/dashboard/selectors/';
import { useDispatch } from '@Redux/store';
import { paragraph } from '@Styles/typography';
import styled from 'styled-components';

const CENTER_SVG = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate("-50%, -50%")',
};

function CheckMark() {
  return (
    <td>
      <SVG.CheckMark stroke={colors.green} style={CENTER_SVG} width="20px" />
    </td>
  );
}
function X() {
  return (
    <td>
      <SVG.X fill={colors.red} style={CENTER_SVG} width="20px" />
    </td>
  );
}

/** Information about which account managers have which abilities. */
function AboutAccountManagers() {
  const dispatch = useDispatch();
  const role = useManagerRole();

  return (
    <Modal backgroundClickToClose title="ABOUT ACCOUNT MANAGERS">
      <Wrapper>
        <p style={{ marginBottom: '32px' }}>
          You can invite people you know to help manage your kittr account.
        </p>
        <p style={{ marginBottom: '32px' }}>
          There are three types of managers:
        </p>
      </Wrapper>

      <Table>
        <thead>
          <tr>
            <Th />
            <Th>Owner{role === 'OWNER' ? ' (You)' : ''}</Th>
            <Th>Administrators{role === 'ADMIN' ? ' (You)' : ''}</Th>
            <Th>Editors{role === 'EDITOR' ? ' (You)' : ''}</Th>
          </tr>
        </thead>
        <TBody>
          <tr>
            <td>Access channel account settings</td>
            <CheckMark />
            <CheckMark />
            <X />
          </tr>
          <tr>
            <td>Assign new channel owner</td>
            <CheckMark />
            <X />
            <X />
          </tr>
          <tr>
            <td>Add & delete games</td>
            <CheckMark />
            <X />
            <X />
          </tr>
          <tr>
            <td>Demote & delete administrators</td>
            <CheckMark />
            <X />
            <X />
          </tr>
          <tr>
            <td>Add, delete, & promote editors</td>
            <CheckMark />
            <CheckMark />
            <td>
              <SVG.X fill={colors.red} style={CENTER_SVG} width="20px" />
            </td>
          </tr>

          <tr>
            <td>Add, edit, & delete kits</td>
            <CheckMark />
            <CheckMark />
            <CheckMark />
          </tr>
          <tr>
            <td>Use the Bot Command Exporter</td>
            <CheckMark />
            <CheckMark />
            <CheckMark />
          </tr>
        </TBody>
      </Table>

      <Button
        design="transparent"
        onClick={() => dispatch(setModal({ type: '', data: {} }))}
        style={{ margin: '32px auto 0' }}
        text="Close"
      />
    </Modal>
  );
}

export default AboutAccountManagers;

// Styled Components

const Wrapper = styled.div`
  ${paragraph};
`;

const Table = styled.table`
  width: 100%;
  letter-spacing: 2px;
`;

const Th = styled.th`
  width: 25%;
`;

const TBody = styled.tbody`
  td {
    position: relative;
    padding: 20px;
  }
`;
