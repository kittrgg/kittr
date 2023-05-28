import { setFailed } from '@actions/core';
import { getOctokit } from '@actions/github';

export function getOctokitClient(): ReturnType<typeof getOctokit> {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) {
    const errorMessage = 'GITHUB_TOKEN is not defined';
    setFailed(errorMessage);
    throw new Error(errorMessage);
  }

  return getOctokit(GITHUB_TOKEN);
}

// eslint-disable-next-line turbo/no-undeclared-env-vars
const CHECK_RUN_ID = process.env.CHECK_RUN_ID;

if (!CHECK_RUN_ID) {
  setFailed('No CHECK_RUN_ID provided.');
}

const owner = 'kittrgg';
const repo = 'kittr';

const main = async () => {
  const check = await getOctokitClient().rest.checks.update({
    check_run_id: CHECK_RUN_ID,
    owner,
    repo,
    status: 'completed',
    conclusion: 'success',
  });

  return check;
};

main()
  // @ts-expect-error Library is lying.
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  .then((check) => console.log(`Check ${check.id}`))
  .catch((err) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    setFailed(err.message);
  });
