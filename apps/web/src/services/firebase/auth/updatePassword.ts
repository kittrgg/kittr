import { auth } from "../index"
import { updatePassword } from "firebase/auth"

export const updateUserPassword = async (password: string) => {
	const user = auth.currentUser
	if (user) {
		return await updatePassword(user, password)
	}

	return null
}
