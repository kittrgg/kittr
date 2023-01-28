import { isTest } from "@kittr/utils"
import { initializeApp, getApp, FirebaseOptions } from "firebase/app"
import { getAuth } from "firebase/auth"

export const firebaseConfig: FirebaseOptions = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

// Must be called before any other Firebase APIs can be used
try {
	if (!isTest) {
		getApp()
	}
} catch {
	if (!isTest) {
		initializeApp(firebaseConfig)
	}
}

export const auth = !isTest ? getAuth() : null
