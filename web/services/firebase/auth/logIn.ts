import { auth } from "../index"

export const logIn = async (email: string, password: string) => {
	try {
		const result = await auth.signInWithEmailAndPassword(email, password)
		return result.user
	} catch (error) {
		throw error
	}
}
