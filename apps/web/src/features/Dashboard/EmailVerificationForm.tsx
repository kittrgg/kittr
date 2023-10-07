import AuthLayout from '@Components/layouts/Authentication';
import Button from '@Components/shared/Button';
import { header4, montserrat } from '@Styles/typography';
import { requestEmailVerification } from '@kittr/firebase/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

function EmailVerificationForm() {
	const router = useRouter();

	useEffect(() => {
		requestEmailVerification();
	}, []);

	return (
		<AuthLayout title="CONFIRM EMAIL">
			<P>
				You just received a verification link at the email address that you
				provided.
			</P>
			<Emphasized
				style={{ marginTop: 0, marginBottom: '12px', textAlign: 'center' }}
			>
				Step 1. Click the Link in your email
			</Emphasized>
			<Button
				design="white"
				onClick={() => router.reload()}
				style={{ margin: '0 auto' }}
				text="Step 2. Click here to be logged in!"
			/>

			<Emphasized style={{ fontSize: '18px' }}>
				Not seeing a code? Check your spam first.
			</Emphasized>
			<P>If you still don't see one, click here to request a fresh message.</P>
			<Button
				onClick={() => requestEmailVerification()}
				style={{ margin: '0 auto' }}
				text="REQUEST CODE"
			/>
		</AuthLayout>
	);
}

export default EmailVerificationForm;

// Styled Components

const P = styled.p`
  margin: 24px;
`;

const Emphasized = styled.p`
  margin-top: 60px;
  ${header4};
  ${montserrat};
`;
