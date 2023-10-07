import { auth } from '@kittr/firebase';
import type { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

/** Use the current Firebase user. */
export const useUser = () => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(auth.currentUser ?? null);
			}
		});

		return unsubscribe;
	}, []);

	return user;
};
