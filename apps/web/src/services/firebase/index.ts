import { initializeApp } from "@firebase/app"
import { connectAuthEmulator, getAuth } from "firebase/auth"
import { connectStorageEmulator, getStorage } from "firebase/storage"

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

// Must be called before any other Firebase APIs can be used
// eslint-disable-next-line
const firebase = initializeApp(firebaseConfig)

export const auth = getAuth()
export const storage = getStorage()

if (process.env.NEXT_PUBLIC_IS_DEV && !auth.emulatorConfig) {
	connectAuthEmulator(auth, `http://${process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST}`)
	connectStorageEmulator(storage, `localhost`, 4002)
}
