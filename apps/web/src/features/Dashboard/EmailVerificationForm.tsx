import AuthLayout from "@Components/layouts/Authentication"
import Button from "@Components/shared/Button"
import { requestEmailVerification } from "@Services/firebase/auth/requestEmailVerification"
import { header4, montserrat } from "@Styles/typography"
import { useRouter } from "next/router"
import { useEffect } from "react"
import styled from "styled-components"

const EmailVerificationForm = ({ ...props }) => {
	const router = useRouter()

	useEffect(() => {
		requestEmailVerification()
	}, [])

	return (
		<AuthLayout title="CONFIRM EMAIL">
			<P>You just received a verification link at the email address that you provided.</P>
			<Emphasized style={{ marginTop: 0, marginBottom: "12px", textAlign: "center" }}>
				Step 1. Click the Link in your email
			</Emphasized>
			<Button
				design="white"
				text="Step 2. Click here to be logged in!"
				onClick={() => router.reload()}
				style={{ margin: "0 auto" }}
			/>

			<Emphasized style={{ fontSize: "18px" }}>Not seeing a code? Check your spam first.</Emphasized>
			<P>If you still don't see one, click here to request a fresh message.</P>
			<Button text="REQUEST CODE" onClick={() => requestEmailVerification()} style={{ margin: "0 auto" }} />
		</AuthLayout>
	)
}

export default EmailVerificationForm

// Styled Components

const P = styled.p`
	margin: 24px;
`

const Emphasized = styled.p`
	margin-top: 60px;
	${header4};
	${montserrat};
`
