import { auth } from "../index"

export const logOut = async () => await auth.signOut()
