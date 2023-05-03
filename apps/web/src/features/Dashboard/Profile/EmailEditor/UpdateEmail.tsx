import colors from "@Colors"
import Button from "@Components/shared/Button"
import TextInput from "@Components/shared/TextInput"
import { updateEmail } from "@kittr/firebase/auth"
import type { Dispatch, SetStateAction} from "react";
import { useState } from "react"

interface Props {
	setStep: Dispatch<SetStateAction<number>>
}

/** A user can update their email address here. */
function UpdateEmail({ setStep }: Props) {
	const [email, setEmail] = useState("")
	const [error, setError] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		updateEmail(email)
			.then(() => setStep(3))
			.catch((err) => setError(err.message))
	}

	return (
		<form onSubmit={handleSubmit}>
				<p>Tell us your new email.</p>
				<TextInput
					inputStyles={{ width: "350px" }}
					label="New Email"
					labelStyles={{ marginTop: "12px" }}
					name="newEmail"
					onChange={(e) => setEmail(e.target.value)}
					topLabel
					type="email"
					value={email}
				/>
				<Button
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
