import firebase from "firebase/app"
import { useState, useEffect } from "react"

/** Use the current Firebase user. */
export const useUser = () => {
	const [user, setUser] = useState<firebase.User | null>(null)

	useEffect(() => {
		const auth = firebase.auth()

		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(auth.currentUser)
			}
		})

		return unsubscribe
	}, [])

	return user
}
