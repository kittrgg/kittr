import colors from "@Colors"
import AuthLayout from "@Components/layouts/Authentication"
import { Button, TextInput } from "@Components/shared"
import { logIn } from "@Services/firebase/auth/logIn"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import styled from "styled-components"

const Login = ({ ...props }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isFetching, setIsFetching] = useState(false)
	const [error, setError] = useState("")
	const router = useRouter()

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsFetching(true)
		logIn(email, password).catch((err: { code: string; message: string }) => {
			setIsFetching(false)
			if (err.code) {
				if (err.code === "auth/invalid-email") {
					return setError("That doesn't look like an email address.")
				}

				if (err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
					return setError("Either your email or password is wrong.")
				}

				return setError(err.message)
			}
		})
	}
	return (
		<AuthLayout title="LOG IN">
			<form onSubmit={onSubmit} noValidate>
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
					inputStyles={{ width: "80%", margin: "0" }}
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
					inputStyles={{ width: "80%", margin: "0" }}
				/>
				<CreateAccount>
					Not registered yet?
					<Link href={Routes.SIGN_UP}>
						<a>Create an account.</a>
					</Link>
				</CreateAccount>
				<Link href={Routes.FORGOT_PASSWORD} passHref>
					<LinkBox style={{ display: "inline-block" }}>Forgot password?</LinkBox>
				</Link>

				<LoginError>{error}</LoginError>

				<ButtonFlex>
					<Button
						type="button"
						design="transparent"
						text="BACK"
						onClick={(e) => {
							e.preventDefault()
							router.push(Routes.ROOT)
						}}
						style={{ marginTop: "24px" }}
					/>
					<Button
						type="submit"
						design="white"
						text={isFetching ? "..." : "LOG IN"}
						disabled={isFetching}
						style={{
							marginTop: "24px",
							backgroundColor: error ? colors.red : ""
						}}
						dataCy="login-button"
					/>
				</ButtonFlex>
			</form>
		</AuthLayout>
	)
}

export default Login

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
`

const LoginError = styled.p`
	margin-top: 24px;
	color: ${colors.red};
	font-size: 18px;
	font-weight: 600;
	letter-spacing: 2px;
`

const LinkBox = styled.a`
	margin-top: 24px;
	color: ${colors.white};
	font-family: "Montserrat", sans-serif;
	font-weight: 600;
	font-size: 18px;
	letter-spacing: 2px;

	&:hover {
		text-decoration: underline;
	}
`

const CreateAccount = styled.p`
	margin-top: 24px;
	color: ${colors.white};
	font-family: "Montserrat", sans-serif;
	font-size: 18px;
	letter-spacing: 2px;

	a {
		margin-left: 8px;
		color: ${colors.white};
		font-weight: 600;
	}
`
