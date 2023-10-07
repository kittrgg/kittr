import admin from 'firebase-admin';

if (!admin.apps.length) {
	try {
		if (!process.env.FIREBASE_ADMIN_PRIVATE_KEY) {
			throw new Error('No Firebase key proided.');
		}

		admin.initializeApp({
			credential: admin.credential.cert({
				privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(
					/\\n/g,
					'\n',
				),
				clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
				projectId: process.env.FIREBASE_PROJECT_ID,
			}),
		});
	} catch (err) {
		// eslint-disable-next-line no-console -- We'll get Firebase out of here at some point.
		console.error(err);
		throw new Error('Something is wrong with Firebase.');
	}
}

export const auth = admin.auth();
