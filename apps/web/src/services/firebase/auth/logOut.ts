import { auth } from "../index"
import { signOut } from "firebase/auth"

export const logOut = async () => await signOut(auth)
