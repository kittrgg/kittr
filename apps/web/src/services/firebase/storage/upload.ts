import { storage } from "@Services/firebase"
import { ref, uploadBytes } from "firebase/storage"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const upload = async (id: string, file: any) => {
	const storageRef = ref(storage, id)
	const bytes = await uploadBytes(storageRef, file)
	return bytes
}
