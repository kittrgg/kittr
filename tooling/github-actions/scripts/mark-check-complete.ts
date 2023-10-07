import { setFailed } from '@actions/core';
import { repo, owner, getOctokitClient } from './common';

const conclusion = process.env.CONCLUSION;
if (!conclusion) {
	setFailed(
		'Please provide one of "success" or "failure" for process.env.CONCLUSION.',
	);
}

const CHECK_RUN_ID = process.env.CHECK_RUN_ID;

if (!CHECK_RUN_ID) {
	setFailed('No CHECK_RUN_ID provided.');
}

const main = async () => {
	const check = await getOctokitClient().rest.checks.update({
		check_run_id: CHECK_RUN_ID,
		owner,
		repo,
		status: 'completed',
		conclusion,
	});

	return check;
};

main()
	.then((check) => {
		console.log(`Check ${check.data.id} marked as complete.`);
	})
	.catch((err) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access -- Yucky types from package.
		setFailed(err.message);
	});
