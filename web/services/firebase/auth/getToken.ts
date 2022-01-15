import { auth } from "../index"

export const getToken = async () => {
	const result = await auth.currentUser?.getIdToken()
	return result
}
