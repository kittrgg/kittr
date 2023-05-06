import { updatePassword } from 'firebase/auth';
import { auth } from '../index';

export const updateUserPassword = async (password: string) => {
  const user = auth?.currentUser;
  if (user) {
    return await updatePassword(user, password);
  }

  return null;
};
