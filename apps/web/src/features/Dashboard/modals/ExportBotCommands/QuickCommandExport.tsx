import colors from '@Colors';
import { Button, Modal, MultiButton } from '@Components/shared';
import CommandsTable from '@Features/Dashboard/modals/ExportBotCommands/CommandsTable';
import { setModal } from '@Redux/slices/dashboard';
import { useModal } from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import type { TCommandMethod } from '@kittr/types/types';
import { useState } from 'react';
import * as Styled from './style';

function QuickCommandExport({ ...props }) {
  const dispatch = useDispatch();
  const { data } = useModal();
  const [includeUser, setIncludeUser] = useState(true);
  const [method, setMethod] = useState<TCommandMethod>('nightbot');
  const [commandStrategy, setCommandStrategy] = useState<'edit' | 'add'>(
    'edit',
  );

  return (
    <Modal backgroundClickToClose title="QUICK COMMAND EXPORT">
      <Styled.HorizFlex>
        <Styled.ToggleDescription>
          Include username of command requester in Nightbot response?
        </Styled.ToggleDescription>
        <Styled.ToggleContainer flexBasis={600}>
          <MultiButton
            activeValue={method}
            onClick={(elem) => setMethod(elem.value)}
            values={[
              {
                text: 'NIGHTBOT',
                value: 'nightbot' as TCommandMethod,
                backgroundColor: colors.nightbotBlue,
              },
              {
                text: 'CHANNEL ELEMENTS',
                value: 'channel-elements' as TCommandMethod,
                backgroundColor: colors.channelElementsBlue,
              },
            ]}
            wrapperBackgroundColor={colors.darker}
          />
        </Styled.ToggleContainer>
      </Styled.HorizFlex>
      <Styled.HorizFlex>
        <Styled.ToggleDescription>
          Include username of command requester in Nightbot response?
        </Styled.ToggleDescription>
        <Styled.ToggleContainer flexBasis={250}>
          <MultiButton
            activeValue={includeUser ? 'YUP' : 'NOPE'}
            dataCy="user-toggle"
            onClick={() => setIncludeUser(!includeUser)}
            values={[
              {
                text: 'YUP',
              },
              {
                text: 'NOPE',
              },
            ]}
          />
        </Styled.ToggleContainer>
      </Styled.HorizFlex>
      <div style={{ width: '50%', margin: '0 auto' }}>
        <MultiButton
          activeValue={commandStrategy}
          dataCy="command-toggle"
          onClick={(e) => setCommandStrategy(e.value)}
          values={[
            {
              text: 'EDIT COMMAND',
              value: 'edit',
            },
            {
              text: 'ADD COMMAND',
              value: 'add',
            },
          ]}
        />
      </div>
      <CommandsTable
        commandStrategy={commandStrategy}
        includeMasterCommands={false}
        includeUser={includeUser}
        kits={data}
        method={method}
      />
      <Button
        design="transparent"
        onClick={() => dispatch(setModal({ type: '', data: '' }))}
        style={{
          margin: '24px auto',
          marginBottom: '0',
          backgroundColor: colors.middle,
        }}
        text="BACK"
      />
    </Modal>
  );
}

export default QuickCommandExport;
