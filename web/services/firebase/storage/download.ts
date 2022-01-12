import firebase from "firebase/app"
import "firebase/storage"

/** Return the path to the Firebase document. */
export const download = async (fileName: string, handler?: (...args: any) => any) => {
	try {
		let imageRef = firebase.storage().ref()
		const path = await imageRef.child(fileName).getDownloadURL()

		if (path && handler) return handler(path)
		if (path) return path
	} catch (err) {
		console.error(err)
		return handler?.(null)
	}
}
