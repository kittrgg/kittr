import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../index"

export const signUp = (email: string, password: string) => {
	try {
		return createUserWithEmailAndPassword(auth, email, password)
	} catch (error) {
		throw error
	}
}
