import colors from "@Colors"
import AuthLayout from "@Components/layouts/Authentication"
import { Button, Spinner, TextInput } from "@Components/shared"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import { useMutation } from "react-query"
import styled from "styled-components"
import validator from "validator"

/** Form to create a user account */
const SignUp = ({ ...props }) => {
	const router = useRouter()
	const [gamertag, setGamertag] = useState("")
	const [email, setEmail] = useState("")
	const [confirmEmail, setConfirmEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [error, setError] = useState("")

	const { mutate, isLoading } = useMutation(async () => {
		try {
			const result = await fetch(`/api/user`, {
				method: "POST",
				body: JSON.stringify({
					displayName: gamertag,
					email,
					password
				})
			})

			const json = result.json() as any

			if (json) {
				if (json.error) {
					return setError(json.message)
				}
				router.push(Routes.DASHBOARD)
			}
		} catch (error) {
			return setError("There was a network error.")
		}
	})

	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
		setError("")

		if (gamertag.length === 0 || email.length === 0) {
			return setError("You must provide a gamertag and email.")
		}

		if (gamertag.length > 26) {
			return setError("That name is too long. 25 characters or less.")
		}

		if (!validator.isEmail(email)) {
			return setError("You must provide a valid email.")
		}

		if (!password) {
			return setError("Please provide a password.")
		}

		if (email !== confirmEmail) {
			return setError("Your emails do not match.")
		}

		if (password !== confirmPassword) {
			return setError("Your passwords do not match.")
		}

		mutate()
	}

	if (isLoading) {
		return (
			<AuthLayout title="SIGN UP">
				<Spinner width="100%" height="100px" />
			</AuthLayout>
		)
	}

	return (
		<AuthLayout title="SIGN UP">
			<Paragraph style={{ margin: "0" }}>
				This is your personal account so use your own info here. Channel specific stuff will come in a minute.
			</Paragraph>
			<form>
				<TextInput
					type="text"
					name="gamertag"
					label="Gamertag"
					width="80%"
					topLabel
					value={gamertag}
					onChange={(e) => {
						setError("")
						setGamertag(e.target.value)
					}}
				/>
				<TextInput
					type="email"
					name="email"
					label="Email"
					width="80%"
					topLabel
					value={email}
					onChange={(e) => {
						setError("")
						setEmail(e.target.value)
					}}
				/>
				<TextInput
					type="email"
					name="confirmemail"
					label="Confirm Email"
					width="80%"
					topLabel
					value={confirmEmail}
					onChange={(e) => {
						setError("")
						setConfirmEmail(e.target.value)
					}}
				/>
				<TextInput
					type="password"
					name="password"
					label="Password"
					width="80%"
					topLabel
					value={password}
					onChange={(e) => {
						setError("")
						setPassword(e.target.value)
					}}
				/>
				<TextInput
					type="password"
					name="confirmPassword"
					label="Confirm Password"
					width="80%"
					topLabel
					value={confirmPassword}
					onChange={(e) => {
						setError("")
						setConfirmPassword(e.target.value)
					}}
				/>
				<Paragraph>
					Already registered?
					<Link href={Routes.DASHBOARD}>
						<a style={{ marginLeft: "8px" }}>Login.</a>
					</Link>
				</Paragraph>
				<Error>{error}</Error>
				<Button design="white" text="CREATE ACCOUNT" onClick={onSubmit} />
			</form>
		</AuthLayout>
	)
}

export default SignUp

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
`

const Error = styled.p`
	margin: 48px 0;
	color: ${colors.red};
	font-weight: 500;
	letter-spacing: 2px;
`
