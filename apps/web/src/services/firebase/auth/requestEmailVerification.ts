import { sendEmailVerification } from "firebase/auth"
import { auth } from "../index"

export const requestEmailVerification = async () => {
	const user = auth.currentUser
	if (user) {
		const result = await sendEmailVerification(user)
		return result
	}

	return null
}
