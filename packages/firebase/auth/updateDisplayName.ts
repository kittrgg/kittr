import { getCurrentUser } from './getCurrentUser';
import { updateProfile } from 'firebase/auth';

export const updateUserDisplayName = async (displayName: string) => {
  const user = getCurrentUser();

  if (user) {
    return updateProfile(user, {
      displayName,
    });
  } else {
    return null;
  }
};
