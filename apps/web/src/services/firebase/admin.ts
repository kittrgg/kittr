import admin from "firebase-admin"

if (!admin.apps.length) {
	try {
		admin.initializeApp({
			storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
			databaseURL: process.env.FIREBASE_DATABASE_URL,
			projectId: process.env.FIREBASE_PROJECT_ID
		})
	} catch (err) {
		console.error(err)
		console.error("Something is wrong with your Firebase key.")
	}
}

export default admin.auth()
