import { auth } from "../index"
import { createUserWithEmailAndPassword } from "firebase/auth"

export const signUp = async (email: string, password: string) => {
	try {
		return await createUserWithEmailAndPassword(auth, email, password)
	} catch (error) {
		throw error
	}
}
