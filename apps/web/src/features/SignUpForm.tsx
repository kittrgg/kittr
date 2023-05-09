import colors from '@Colors';
import AuthLayout from '@Components/layouts/Authentication';
import { Button, Spinner, TextInput } from '@Components/shared';
import { Routes } from '@Utils/lookups/routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import validator from 'validator';
import { trpc } from '@/lib/trpc';

/** Form to create a user account */
function SignUp() {
  const router = useRouter();
  const [gamertag, setGamertag] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { mutate, isLoading } = trpc.users.create.useMutation({
    onSuccess: () => router.push(Routes.DASHBOARD),
    onError: () =>
      setError('Our server just reported an issue. Please try again later.'),
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (gamertag.length === 0 || email.length === 0) {
      return setError('You must provide a gamertag and email.');
    }

    if (gamertag.length > 26) {
      return setError('That name is too long. 25 characters or less.');
    }

    if (!validator.isEmail(email)) {
      return setError('You must provide a valid email.');
    }

    if (!password) {
      return setError('Please provide a password.');
    }

    if (email !== confirmEmail) {
      return setError('Your emails do not match.');
    }

    if (password !== confirmPassword) {
      return setError('Your passwords do not match.');
    }

    mutate({ displayName: gamertag, email, password });
  };

  if (isLoading) {
    return (
      <AuthLayout title="SIGN UP">
        <Spinner height="100px" width="100%" />
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="SIGN UP">
      <Paragraph style={{ margin: '0' }}>
        This is your personal account so use your own info here. Channel
        specific stuff will come in a minute.
      </Paragraph>
      <form>
        <TextInput
          label="Gamertag"
          name="gamertag"
          onChange={(e) => {
            setError('');
            setGamertag(e.target.value);
          }}
          topLabel
          type="text"
          value={gamertag}
          width="80%"
        />
        <TextInput
          label="Email"
          name="email"
          onChange={(e) => {
            setError('');
            setEmail(e.target.value);
          }}
          topLabel
          type="email"
          value={email}
          width="80%"
        />
        <TextInput
          label="Confirm Email"
          name="confirmemail"
          onChange={(e) => {
            setError('');
            setConfirmEmail(e.target.value);
          }}
          topLabel
          type="email"
          value={confirmEmail}
          width="80%"
        />
        <TextInput
          label="Password"
          name="password"
          onChange={(e) => {
            setError('');
            setPassword(e.target.value);
          }}
          topLabel
          type="password"
          value={password}
          width="80%"
        />
        <TextInput
          label="Confirm Password"
          name="confirmPassword"
          onChange={(e) => {
            setError('');
            setConfirmPassword(e.target.value);
          }}
          topLabel
          type="password"
          value={confirmPassword}
          width="80%"
        />
        <Paragraph>
          Already registered?
          <Link href={Routes.DASHBOARD} style={{ marginLeft: '8px' }}>
            Login.
          </Link>
        </Paragraph>
        <Error>{error}</Error>
        <Button design="white" onClick={onSubmit} text="CREATE ACCOUNT" />
      </form>
    </AuthLayout>
  );
}

export default SignUp;

// Styled Components

const Paragraph = styled.div`
  margin: 48px 0;
  font-size: 18px;
  letter-spacing: 2px;
  color: ${colors.white};

  a {
    font-weight: 600;
    color: ${colors.white};
  }
`;

const Error = styled.p`
  margin: 48px 0;
  color: ${colors.red};
  font-weight: 500;
  letter-spacing: 2px;
`;
