import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  signInWithCredential,
} from 'firebase/auth';
import { auth } from '../index';

export const reauthenticate = async (password: string) => {
  if (!auth.currentUser) {
    throw new Error('No current user.');
  }

  const { email } = auth.currentUser;

  // We are forcing the type string here because we only use the email auth provider
  // If in the future we used other auth providers, this may break!
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const authCred = EmailAuthProvider.credential(email!, password);

  const authUser = (await signInWithCredential(auth, authCred)).user;
  await reauthenticateWithCredential(authUser, authCred);
  return null;
};
