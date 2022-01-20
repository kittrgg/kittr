import { auth } from "../index"

export const requestEmailVerification = async () => {
	const result = await auth.currentUser?.sendEmailVerification()
	return result
}
