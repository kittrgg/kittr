import firebase, { initializeApp } from "firebase/app"
import { getAuth, connectAuthEmulator } from "firebase/auth"

export const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY || "dev",
	authDomain: process.env.FIREBASE_AUTH_DOMAIN || "dev",
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "dev",
	projectId: process.env.FIREBASE_PROJECT_ID || "dev",
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "dev",
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "dev",
	appId: process.env.FIREBASE_APP_ID || "dev",
	measurementId: process.env.FIREBASE_MEASUREMENT_ID || "dev"
}

const app = () => {
	if (!firebase?.getApp()) {
		return initializeApp(firebaseConfig)
	}
}

app()

export const auth = getAuth()
if (!process.env.IS_DEV) {
	connectAuthEmulator(auth, "http://localhost:4001")
}

export default app
