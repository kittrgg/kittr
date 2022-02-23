import { storage } from "@Services/firebase"
import { deleteObject, ref } from "firebase/storage"

export const deleteFile = async (id: string) => {
	const storageRef = ref(storage, id)
	await deleteObject(storageRef)
	return true
}
