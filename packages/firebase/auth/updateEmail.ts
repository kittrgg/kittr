import { auth } from '../index';
import { verifyBeforeUpdateEmail } from 'firebase/auth';

export const updateEmail = async (newEmail: string) => {
  const user = auth?.currentUser;
  if (user) {
    return verifyBeforeUpdateEmail(user, newEmail);
  }
  return null;
};
