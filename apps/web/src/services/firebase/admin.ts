import admin from "firebase-admin"

if (!admin.apps.length) {
	if (process.env.NEXT_PUBLIC_IS_DEV) {
		console.log("Using admin in emulator mode.")
		admin.initializeApp({ projectId: "dev" })
	} else {
		try {
			admin.initializeApp({
				credential: admin.credential.cert(JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS as any))
			})
		} catch (err) {
			console.error(err)
			console.error("Something is wrong with your Firebase key.")
		}
	}
}


export default admin.auth()
