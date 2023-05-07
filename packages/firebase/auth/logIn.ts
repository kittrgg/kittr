import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../index";

export const logIn = async (email: string, password: string) => {
  try {
    if (!auth) {
      console.log("No auth is up. You're probably testing?");
      return;
    }

    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    throw error;
  }
};
