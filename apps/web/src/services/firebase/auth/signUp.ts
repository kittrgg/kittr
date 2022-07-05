import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../index"

export const signUp = async (email: string, password: string) => {
	try {
		return await createUserWithEmailAndPassword(auth, email, password)
	} catch (error) {
		throw error
	}
}
