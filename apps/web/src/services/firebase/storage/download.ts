import { storage } from "@Services/firebase"
import { getDownloadURL, ref } from "firebase/storage"

/** Return the path to the Firebase document. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const download = async (fileName: string, handler?: (...args: any) => any) => {
	try {
		const storageRef = ref(storage, fileName)
		const path = await getDownloadURL(storageRef)

		if (path && handler) return handler(path)
		if (path) return path
	} catch (err) {
		console.error(err)
		return handler?.(null)
	}
}
