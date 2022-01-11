import firebase from "firebase/app"

const storageRef = firebase.storage().ref()

export const deleteFile = async (id: string) => {
	await storageRef.child(`${id}`).delete()
	return true
}
