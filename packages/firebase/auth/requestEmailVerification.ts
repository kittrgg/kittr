import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../index';

export const requestEmailVerification = async () => {
  const user = auth.currentUser;
  if (user) {
    return sendEmailVerification(user).then((res) => res);
  }

  return null;
};
