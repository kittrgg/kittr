import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../index"

export const signUp = (email: string, password: string) => {
	return createUserWithEmailAndPassword(auth, email, password)
}
