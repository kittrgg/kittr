import { auth } from "../index"
import { sendEmailVerification } from "firebase/auth"

export const requestEmailVerification = async () => {
	const user = auth.currentUser
	if (user) {
		const result = await sendEmailVerification(user)
		return result
	}

	return null
}
