import { verifyBeforeUpdateEmail } from 'firebase/auth';
import { auth } from '../index';

export const updateEmail = async (newEmail: string) => {
	const user = auth.currentUser;
	if (user) {
		return verifyBeforeUpdateEmail(user, newEmail);
	}
	return null;
};
