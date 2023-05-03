import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../index';

export const requestForgotPassword = async (email: string) => {
  if (!auth) {
    console.log("No auth is up. You're probably testing?");
    return;
  }

  const result = await sendPasswordResetEmail(auth, email);
  return result;
};
