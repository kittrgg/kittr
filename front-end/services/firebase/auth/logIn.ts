import { auth } from "../index"

if (process.env.NEXT_PUBLIC_ENVIRONMENT === "TESTING") {
	auth.useEmulator(`http://${process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST}`)
}

export const logIn = async (email: string, password: string) => {
	try {
		const result = await auth.signInWithEmailAndPassword(email, password)
		return result.user
	} catch (error) {
		throw error
	}
}
