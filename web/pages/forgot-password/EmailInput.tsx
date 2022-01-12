import validator from "validator"
import { useState, Dispatch, SetStateAction, FormEvent } from "react"
import styled from "styled-components"
import { requestForgotPassword } from "@Services/firebase/auth/requestForgotPassword"

import BackToLogin from "./BackToLogin"
import TextInput from "@Components/shared/TextInput"
import Button from "@Components/shared/Button"
import colors from "@Colors"

interface Props {
	setStep: Dispatch<SetStateAction<number>>
}

/** Within the forgot password user flow, the step for submitting your email. */
const EmailInput = ({ setStep }: Props) => {
	const [email, setEmail] = useState("")
	const [error, setError] = useState("")

	const handleClick = async (e: FormEvent) => {
		e.preventDefault()

		if (!validator.isEmail(email)) return setError("Must be a valid email address.")

		requestForgotPassword(email)
			.then(() => setStep(2))
			.catch((err) => console.error(err))
	}

	return (
		<>
			<FormParagraph>
				Enter the email address associated with your account and we'll send you a message with instructions to reset
				your password.
			</FormParagraph>
			<FormBody>
				<div style={{ width: "60%" }}>
					<TextInput
						type="email"
						name="email"
						label="Email"
						width="100%"
						topLabel
						value={email}
						onChange={(e) => {
							setError("")
							setEmail(e.target.value)
						}}
						subline={error}
						sublineStyles={{ color: colors.red }}
					/>
				</div>
				<Button
					design="white"
					text="Send Email"
					disabled={!!error}
					style={{ marginTop: "24px", backgroundColor: error ? colors.red : "" }}
					onClick={handleClick}
				/>
			</FormBody>
			<BackToLogin />
		</>
	)
}

export default EmailInput

// Styled Components

const FormParagraph = styled.p`
	margin-top: -20px;
	font-size: 18px;
	color: ${colors.lightest};

	@media (max-width: 1050px) {
		margin-top: 18px;
	}
`

const FormBody = styled.form`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 1050px) {
		flex-direction: column;
	}
`
