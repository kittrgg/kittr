import colors from "@Colors"
import Button from "@Components/shared/Button"
import TextInput from "@Components/shared/TextInput"
import { updateEmail } from "@Services/firebase/auth/updateEmail"
import { Dispatch, SetStateAction, useState } from "react"

interface Props {
	setStep: Dispatch<SetStateAction<number>>
}

/** A user can update their email address here. */
const UpdateEmail = ({ setStep }: Props) => {
	const [email, setEmail] = useState("")
	const [error, setError] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		updateEmail(email)
			.then(() => setStep(3))
			.catch((err) => setError(err.message))
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<p>Tell us your new email.</p>
				<TextInput
					type="email"
					name="newEmail"
					label="New Email"
					topLabel
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					labelStyles={{ marginTop: "12px" }}
					inputStyles={{ width: "350px" }}
				/>
				<Button
					design="white"
					text="Submit Change"
					type="submit"
					style={{ margin: "24px 0", backgroundColor: error ? colors.red : "" }}
				/>

				<p style={{ color: colors.red }}>{error}</p>
			</form>
		</>
	)
}

export default UpdateEmail
