import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY as string).replace(
          /\\n/g,
          '\n',
        ),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        projectId: process.env.FIREBASE_PROJECT_ID,
      }),
    });
  } catch (err) {
    console.error(err);
    console.error('Something is wrong with your Firebase key.');
  }
}

export default admin.auth();
