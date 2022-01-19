import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"

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
	if (!firebase.apps.length) {
		return firebase.initializeApp(firebaseConfig)
	}
}

app()

export const auth = firebase.auth()

if (process.env.NEXT_PUBLIC_ENVIRONMENT === "DEVELOPMENT") {
	auth.useEmulator(`http://${process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST}`)
}

export default app
