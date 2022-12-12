import admin from "firebase-admin"

if (!admin.apps.length) {
	console.log({
		projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
		databaseURL: process.env.FIREBASE_DATABASE_URL
	})
	try {
		admin.initializeApp({
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
			databaseURL: process.env.FIREBASE_DATABASE_URL
			// credential: admin.credential.cert(JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS as any))
		})
	} catch (err) {
		console.error(err)
		console.error("Something is wrong with your Firebase key.")
	}
}

export default admin.auth()
