import colors from '@Colors';
import Button from '@Components/shared/Button';
import TextInput from '@Components/shared/TextInput';
import { requestForgotPassword } from '@kittr/firebase/auth';
import type { Dispatch, SetStateAction, FormEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import validator from 'validator';
import BackToLogin from './BackToLogin';

interface Props {
	setStep: Dispatch<SetStateAction<number>>;
}

/** Within the forgot password user flow, the step for submitting your email. */
function EmailInput({ setStep }: Props) {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const handleClick = async (e: FormEvent) => {
		e.preventDefault();

		if (!validator.isEmail(email))
			return setError('Must be a valid email address.');

		requestForgotPassword(email)
			.then(() => setStep(2))
			.catch((err) => console.error(err));
	};

	return (
		<>
			<FormParagraph>
				Enter the email address associated with your account and we will send
				you a message with instructions to reset your password.
			</FormParagraph>
			<FormBody>
				<div style={{ width: '60%' }}>
					<TextInput
						label="Email"
						name="email"
						onChange={(e) => {
							setError('');
							setEmail(e.target.value);
						}}
						subline={error}
						sublineStyles={{ color: colors.red }}
						topLabel
						type="email"
						value={email}
						width="100%"
					/>
				</div>
				<Button
					design="white"
					disabled={Boolean(error)}
					onClick={handleClick}
					style={{
						marginTop: '24px',
						backgroundColor: error ? colors.red : '',
					}}
					text="Send Email"
				/>
			</FormBody>
			<BackToLogin />
		</>
	);
}

export default EmailInput;

// Styled Components

const FormParagraph = styled.p`
  margin-top: -20px;
  font-size: 18px;
  color: ${colors.white};

  @media (max-width: 1050px) {
    margin-top: 18px;
  }
`;

const FormBody = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;
