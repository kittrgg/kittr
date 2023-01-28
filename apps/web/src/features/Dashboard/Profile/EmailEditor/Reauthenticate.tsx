import colors from "@Colors"
import Button from "@Components/shared/Button"
import TextInput from "@Components/shared/TextInput"
import { reauthenticate } from "@kittr/firebase/auth/reauthenticate"
import { Dispatch, SetStateAction, useState } from "react"

interface Props {
	setStep: Dispatch<SetStateAction<number>>
}

/** If a user wants to edit their email address, they must first re-authenticate to acquire a short-lived token. */
const Reauthenticate = ({ setStep }: Props) => {
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		reauthenticate(password)
			.then(() => setStep(2))
			.catch(() => setError("Wrong password!"))
	}

	return (
		<form onSubmit={handleSubmit}>
			<p>To change the email address for this account, first provide us with the password.</p>
			<TextInput
				type="password"
				name="password"
				label="Password"
				topLabel
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				labelStyles={{ marginTop: "12px" }}
				inputStyles={{ width: "350px" }}
			/>
			<Button
				design="white"
				text="Submit"
				type="submit"
				style={{ margin: "24px 0", backgroundColor: error ? colors.red : "" }}
			/>

			<p style={{ color: colors.red }}>{error}</p>
		</form>
	)
}

export default Reauthenticate
