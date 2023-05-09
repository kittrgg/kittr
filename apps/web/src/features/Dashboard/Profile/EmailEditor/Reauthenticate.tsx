import colors from '@Colors';
import Button from '@Components/shared/Button';
import TextInput from '@Components/shared/TextInput';
import { reauthenticate } from '@kittr/firebase/auth';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

interface Props {
  setStep: Dispatch<SetStateAction<number>>;
}

/** If a user wants to edit their email address, they must first re-authenticate to acquire a short-lived token. */
function Reauthenticate({ setStep }: Props) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    reauthenticate(password)
      .then(() => setStep(2))
      .catch(() => setError('Wrong password!'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        To change the email address for this account, first provide us with the
        password.
      </p>
      <TextInput
        inputStyles={{ width: '350px' }}
        label="Password"
        labelStyles={{ marginTop: '12px' }}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        topLabel
        type="password"
        value={password}
      />
      <Button
        design="white"
        style={{ margin: '24px 0', backgroundColor: error ? colors.red : '' }}
        text="Submit"
        type="submit"
      />

      <p style={{ color: colors.red }}>{error}</p>
    </form>
  );
}

export default Reauthenticate;
