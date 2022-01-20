import admin from "firebase-admin"

if (!admin.apps.length) {
	if (process.env.ENVIRONMENT === "DEVELOPMENT") {
		console.log("Using admin in emulator mode.")
		admin.initializeApp({ projectId: "dev" })
	} else {
		try {
			console.log("Checking creds...")
			console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)
			console.log(JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS as any))
			console.log(typeof JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS as any))

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
