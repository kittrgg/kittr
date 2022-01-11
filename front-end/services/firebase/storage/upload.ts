import firebase from "firebase/app"

const storageRef = firebase.storage().ref()

export const upload = (id: string, file: any) => {
	let imageRef = storageRef.child(`${id}`)
	return imageRef.put(file, {
		cacheControl: "public,max-age=86400"
	})
}
