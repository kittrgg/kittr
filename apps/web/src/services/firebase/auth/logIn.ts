import { auth } from "../index"
import { signInWithEmailAndPassword } from "firebase/auth"

export const logIn = async (email: string, password: string) => {
	try {
		const result = await signInWithEmailAndPassword(auth, email, password)
		return result.user
	} catch (error) {
		throw error
	}
}
