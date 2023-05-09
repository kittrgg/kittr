import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../index';

export const requestForgotPassword = async (email: string) => {
  return sendPasswordResetEmail(auth, email);
};
