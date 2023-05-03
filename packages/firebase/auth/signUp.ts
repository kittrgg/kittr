import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../index';

export const signUp = async (email: string, password: string) => {
  try {
    if (!auth) {
      console.log("No auth is up. You're probably testing?");
      return;
    }
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};
