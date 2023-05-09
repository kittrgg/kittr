import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    console.log('yep, ran here YEP')
    admin.initializeApp({
      credential: admin.credential.cert({
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY!.replace(
          /\\n/g,
          '\n',
        ),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        projectId: process.env.FIREBASE_PROJECT_ID,
      }),
    });
    console.log("YOU INITTED")
  } catch (err) {
    console.error(err);
    console.error('Something is wrong with your Firebase key.');
    throw new Error("Something is wrong with Firebase.")
  }
}

export default admin.auth();
