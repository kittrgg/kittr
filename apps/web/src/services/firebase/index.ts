import { initializeApp, getApp } from "@firebase/app"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

export const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

try {
	getApp()
} catch {
	initializeApp(firebaseConfig)
}

export const auth = getAuth()
export const storage = getStorage()

// We used to use this code for doing localized firebase emulators.
// They became pretty toxic so we're not going to use them right now.
// if (process.env.NEXT_PUBLIC_IS_DEV && !auth.emulatorConfig) {
// 	connectAuthEmulator(auth, `http://${process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST}`, { disableWarnings: true })
// 	connectStorageEmulator(storage, "localhost", 4002)
// }
