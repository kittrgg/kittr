import firebase from "firebase/app"
import { auth } from "../index"

export const reauthenticate = async (password: string) => {
	const user = auth.currentUser
	const credential = firebase.auth.EmailAuthProvider.credential(user?.email as string, password)

	return await user?.reauthenticateWithCredential(credential)
}
