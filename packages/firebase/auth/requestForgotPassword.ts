import { auth } from '../index';
import { sendPasswordResetEmail } from 'firebase/auth';

export const requestForgotPassword = async (email: string) => {
  if (!auth) {
    console.log("No auth is up. You're probably testing?");
    return;
  }

  const result = await sendPasswordResetEmail(auth, email);
  return result;
};
