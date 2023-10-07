import colors from '@Colors';
import AuthLayout from '@Components/layouts/Authentication';
import { Button, TextInput } from '@Components/shared';
import { Routes } from '@Utils/lookups/routes';
import { logIn } from '@kittr/firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState('');
	const router = useRouter();

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsFetching(true);
		logIn(email, password).catch((err: { code: string; message: string }) => {
			setIsFetching(false);
			if (err.code) {
				if (err.code === 'auth/invalid-email') {
					return setError("That doesn't look like an email address.");
				}

				if (
					err.code === 'auth/wrong-password' ||
					err.code === 'auth/user-not-found'
				) {
					return setError('Either your email or password is wrong.');
				}

				return setError(err.message);
			}
		});
	};
	return (
		<AuthLayout title="LOG IN">
			<form noValidate onSubmit={onSubmit}>
				<TextInput
					inputStyles={{ width: '80%', margin: '0' }}
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
					inputStyles={{ width: '80%', margin: '0' }}
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
				<CreateAccount>
					Not registered yet?
					<Link href={Routes.SIGN_UP}>Create an account.</Link>
				</CreateAccount>
				<Link href={Routes.FORGOT_PASSWORD} legacyBehavior passHref>
					<LinkBox style={{ display: 'inline-block' }}>
						Forgot password?
					</LinkBox>
				</Link>

				<LoginError>{error}</LoginError>

				<ButtonFlex>
					<Button
						design="transparent"
						onClick={(e) => {
							e.preventDefault();
							router.push(Routes.ROOT);
						}}
						style={{ marginTop: '24px' }}
						text="BACK"
						type="button"
					/>
					<Button
						dataCy="login-button"
						design="white"
						disabled={isFetching}
						style={{
							marginTop: '24px',
							backgroundColor: error ? colors.red : '',
						}}
						text={isFetching ? '...' : 'LOG IN'}
						type="submit"
					/>
				</ButtonFlex>
			</form>
		</AuthLayout>
	);
}

export default Login;

// Styled Components

const ButtonFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 32px;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

const LoginError = styled.p`
  margin-top: 24px;
  color: ${colors.red};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
`;

const LinkBox = styled.a`
  margin-top: 24px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 2px;

  &:hover {
    text-decoration: underline;
  }
`;

const CreateAccount = styled.p`
  margin-top: 24px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  letter-spacing: 2px;

  a {
    margin-left: 8px;
    color: ${colors.white};
    font-weight: 600;
  }
`;
