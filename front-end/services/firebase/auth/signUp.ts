import { auth } from "../index"

if (process.env.NEXT_PUBLIC_ENVIRONMENT === "TESTING") {
	auth.useEmulator(`http://${process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST}`)
}

export const signUp = (email: string, password: string) => {
	return auth.createUserWithEmailAndPassword(email, password)
}
