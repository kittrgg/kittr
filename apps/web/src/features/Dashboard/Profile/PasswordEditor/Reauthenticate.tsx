import colors from "@Colors"
import Button from "@Components/shared/Button"
import TextInput from "@Components/shared/TextInput"
import { reauthenticate } from "@kittr/firebase/auth"
import type { Dispatch, SetStateAction} from "react";
import { useState } from "react"

interface Props {
	setStep: Dispatch<SetStateAction<number>>
}

function Reauthenticate({ setStep }: Props) {
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
				inputStyles={{ width: "350px" }}
				label="Password"
				labelStyles={{ marginTop: "12px" }}
				name="password-reauthenticate"
				onChange={(e) => setPassword(e.target.value)}
				topLabel
				type="password"
				value={password}
			/>
			<Button
				dataCy="reauthenticate-button"
				design="white"
				style={{ margin: "24px 0", backgroundColor: error ? colors.red : "" }}
				text="Submit"
				type="submit"
			/>

			<p style={{ color: colors.red }}>{error}</p>
		</form>
	)
}

export default Reauthenticate
