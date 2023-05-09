import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../index';

export const logIn = async (email: string, password: string) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
};
