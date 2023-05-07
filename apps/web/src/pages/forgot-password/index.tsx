import AuthLayout from '@Components/layouts/Authentication';
import Head from '@Components/shared/Head';
import { useState } from 'react';
import Success from '@Features/ForgotPassword/Success';
import EmailInput from '@Features/ForgotPassword/EmailInput';

function ForgotPassword() {
  const [step, setStep] = useState(1);

  return (
    <AuthLayout title={step === 1 ? 'FORGOT PASSWORD?' : 'CHECK YOUR EMAIL'}>
      <Head
        description="Forgot your password? Let's fix that up."
        title="Forgot Password | kittr"
      />
      {step === 1 && <EmailInput setStep={setStep} />}
      {step === 2 && <Success />}
    </AuthLayout>
  );
}

export default ForgotPassword;
