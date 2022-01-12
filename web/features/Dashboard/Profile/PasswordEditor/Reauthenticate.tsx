import colors from "@Colors"
import Button from "@Components/shared/Button"
import TextInput from "@Components/shared/TextInput"
import { reauthenticate } from "@Services/firebase/auth/reauthenticate"
import { Dispatch, SetStateAction, useState } from "react"

interface Props {
	setStep: Dispatch<SetStateAction<number>>
}

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
			<p>First, we'll need your current password.</p>
			<TextInput
				type="password"
				name="password-reauthenticate"
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
				dataCy="reauthenticate-button"
			/>

			<p style={{ color: colors.red }}>{error}</p>
		</form>
	)
}

export default Reauthenticate
