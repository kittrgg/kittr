import admin from "firebase-admin"

export const initFirebase = () => {
	if (process.env.IS_DEV) {
		admin.initializeApp({
			projectId: "dev"
		})
	} else {
		try {
			admin.initializeApp({
				credential: admin.credential.cert(
					JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS as any)
				)
			})
		} catch (err) {
			console.error("Something is wrong with the provided Firebase cert.")
		}
	}
}
