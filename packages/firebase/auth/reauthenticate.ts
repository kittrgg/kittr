import { auth } from "../index"
import {
	EmailAuthProvider,
	reauthenticateWithCredential,
	signInWithCredential
} from "firebase/auth"

export const reauthenticate = async (password: string) => {
	const user = auth?.currentUser

	if (user) {
		const { email } = user

		// We are forcing the type string here because we only use the email auth provider
		// If in the future we used other auth providers, this may break!
		const authCred = EmailAuthProvider.credential(email as string, password)

		if (!auth) {
			console.log("No auth is up. You're probably testing?")
			return
		}

		const authUser = (await signInWithCredential(auth, authCred)).user
		await reauthenticateWithCredential(authUser, authCred)
	}

	return null
}
