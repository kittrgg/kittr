import { auth } from '../index';

export const getCurrentUser = () => {
  return auth.currentUser;
};
