import { storage } from "@Services/firebase"
import { ref, uploadBytes } from "firebase/storage"

export const upload = async (id: string, file: any) => {
	const storageRef = ref(storage, id)
	const bytes = await uploadBytes(storageRef, file)
	return bytes
}
