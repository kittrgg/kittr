import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../index"

export const requestForgotPassword = async (email: string) => {
	const result = await sendPasswordResetEmail(auth, email)
	return result
}
