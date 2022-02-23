import { storage } from "@Services/firebase"
import { getDownloadURL, ref } from "firebase/storage"

/** Return the path to the Firebase document. */
export const download = async (fileName: string, handler?: (...args: any) => any) => {
	try {
		const path = await getDownloadURL(ref(storage, fileName))

		if (path && handler) return handler(path)
		if (path) return path
	} catch (err) {
		console.error(err)
		return handler?.(null)
	}
}
