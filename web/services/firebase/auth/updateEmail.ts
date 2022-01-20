import { auth } from "../index"

export const updateEmail = async (newEmail: string) => {
	const user = auth.currentUser
	return user?.verifyBeforeUpdateEmail(newEmail)
}
