import { useState } from 'react';
import * as Styled from '../style';
import Reauthenticate from './Reauthenticate';
import SuccessMessage from './SuccessMessage';
import UpdateEmail from './UpdateEmail';

function EmailEditor({ ...props }) {
  const [step, setStep] = useState(1);

  if (step === 1) {
    return (
      <>
        <Styled.Header>CHANGE EMAIL ADDRESS</Styled.Header>
        <Reauthenticate setStep={setStep} />
      </>
    );
  }
  if (step === 2) {
    return (
      <>
        <Styled.Header>CHANGE EMAIL ADDRESS</Styled.Header>
        <UpdateEmail setStep={setStep} />
      </>
    );
  }
  if (step === 3) {
    return (
      <>
        <Styled.Header>CHANGE EMAIL ADDRESS</Styled.Header>
        <SuccessMessage />
      </>
    );
  }

  return null;
}

export default EmailEditor;
