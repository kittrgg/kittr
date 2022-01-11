import firebase from "firebase/app"
import { auth } from "../index"

if (process.env.NEXT_PUBLIC_ENVIRONMENT === "TESTING") {
	auth.useEmulator(`http://${process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST}`)
}

export const reauthenticate = async (password: string) => {
	const user = auth.currentUser
	const credential = firebase.auth.EmailAuthProvider.credential(user?.email as string, password)

	return await user?.reauthenticateWithCredential(credential)
}
