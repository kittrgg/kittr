import { auth } from "../index"
import { sendPasswordResetEmail } from "firebase/auth"

export const requestForgotPassword = async (email: string) => {
	const result = await sendPasswordResetEmail(auth, email)
	return result
}
