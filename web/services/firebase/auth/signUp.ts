import { auth } from "../index"

export const signUp = (email: string, password: string) => {
	return auth.createUserWithEmailAndPassword(email, password)
}
