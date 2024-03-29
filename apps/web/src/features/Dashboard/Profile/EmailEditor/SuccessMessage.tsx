import { useDispatch } from '@Redux/store';
import { Routes } from '@Utils/lookups/routes';
import { logOut } from '@kittr/firebase/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/** Logs a user out so that they have to use their new email immediately. */
function SucessMessage({ ...props }) {
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		logOut().then(() => {
			router.push(Routes.EMAIL_CHANGED);
		});
	}, [dispatch, router]);

	return (
		<>
			<p>Your email has not changed quite yet!</p>
			<p>Check your new email address to verify the change.</p>
			<p>If you do not verify your new email, it will not be changed.</p>
		</>
	);
}

export default SucessMessage;
