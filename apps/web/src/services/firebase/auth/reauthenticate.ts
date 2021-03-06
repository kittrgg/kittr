import { EmailAuthProvider, reauthenticateWithCredential, signInWithCredential } from "firebase/auth"
import { auth } from "../index"

export const reauthenticate = async (password: string) => {
	const user = auth.currentUser

	if (user) {
		const { email } = user

		// We are forcing the type string here because we only use the email auth provider
		// If in the future we used other auth providers, this may break!
		const authCred = EmailAuthProvider.credential(email as string, password)
		const authUser = (await signInWithCredential(auth, authCred)).user
		await reauthenticateWithCredential(authUser, authCred)
	}

	return null
}
