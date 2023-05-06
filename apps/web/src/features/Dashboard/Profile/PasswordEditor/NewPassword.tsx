import colors from "@Colors"
import Button from "@Components/shared/Button"
import TextInput from "@Components/shared/TextInput"
import { updateUserPassword, logOut } from "@kittr/firebase/auth"
import { useRouter } from "next/router"
import { useState } from "react"

function UpdateEmail() {
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
		<form onSubmit={handleSubmit}>
			<p>Tell us your new password.</p>
			<TextInput
				inputStyles={{ width: "350px" }}
				label="New Password"
				labelStyles={{ marginTop: "12px" }}
				name="new-password"
				onChange={(e) => setPassword(e.target.value)}
				topLabel
				type="password"
				value={password}
			/>
			<TextInput
				inputStyles={{ width: "350px" }}
				label="Confirm Password"
				labelStyles={{ marginTop: "12px" }}
				name="confirm-password"
				onChange={(e) => setConfirmPassword(e.target.value)}
				topLabel
				type="password"
				value={confirmPassword}
			/>
			<Button
				dataCy="submit-password-change"
				design="white"
				style={{ margin: "24px 0", backgroundColor: error ? colors.red : "" }}
				text="Submit Change"
				type="submit"
			/>

			<p style={{ color: colors.red }}>{error}</p>
		</form>
	)
}

export default UpdateEmail
