import colors from "@Colors"
import Button from "@Components/shared/Button"
import TextInput from "@Components/shared/TextInput"
import { logOut } from "@Services/firebase/auth/logOut"
import { updateUserPassword } from "@Services/firebase/auth/updatePassword"
import { useRouter } from "next/router"
import { useState } from "react"

const UpdateEmail = ({ ...props }) => {
	const router = useRouter()
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [error, setError] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (password.length === 0) return setError("Need a password, bud.")
		if (password !== confirmPassword) return setError("Your passwords don't match.")

		updateUserPassword(password)
			.then(() => {
				logOut()
				router.reload()
			})
			.catch(() => {
				setError("Your password must be longer than 6 characters.")
			})
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<p>Tell us your new password.</p>
				<TextInput
					type="password"
					name="new-password"
					label="New Password"
					topLabel
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					labelStyles={{ marginTop: "12px" }}
					inputStyles={{ width: "350px" }}
				/>
				<TextInput
					type="password"
					name="confirm-password"
					label="Confirm Password"
					topLabel
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					labelStyles={{ marginTop: "12px" }}
					inputStyles={{ width: "350px" }}
				/>
				<Button
					design="white"
					text="Submit Change"
					type="submit"
					style={{ margin: "24px 0", backgroundColor: error ? colors.red : "" }}
					dataCy="submit-password-change"
				/>

				<p style={{ color: colors.red }}>{error}</p>
			</form>
		</>
	)
}

export default UpdateEmail
