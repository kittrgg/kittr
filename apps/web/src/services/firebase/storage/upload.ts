import { storage } from "@Services/firebase"
import { ref, uploadBytes } from "firebase/storage"

export const upload = (id: string, file: any) => {
	const storageRef = ref(storage, id)
	return uploadBytes(storageRef, file)
}
