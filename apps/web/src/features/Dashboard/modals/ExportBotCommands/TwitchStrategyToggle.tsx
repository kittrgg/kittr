import colors from '@Colors';
import MultiButton from '@Components/shared/MultiButton';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
  /** Twitch command strategies to add kittr commands to chat */
  commandStrategy: 'edit' | 'add';
  /** Set the user's Twitch strategy */
  setCommandStrategy: Dispatch<SetStateAction<'edit' | 'add'>>;
}

function TwitchStrategyToggle({ commandStrategy, setCommandStrategy }: Props) {
  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <MultiButton
        activeValue={commandStrategy}
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
        wrapperBackgroundColor={colors.darker}
      />
    </div>
  );
}

export default TwitchStrategyToggle;
