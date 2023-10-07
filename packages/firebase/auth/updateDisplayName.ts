import { updateProfile } from 'firebase/auth';
import { getCurrentUser } from './getCurrentUser';

export const updateUserDisplayName = async (displayName: string) => {
	const user = getCurrentUser();

	if (user) {
		return updateProfile(user, {
			displayName,
		});
	}
	return null;
};
