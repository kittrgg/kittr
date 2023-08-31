import { join } from 'node:path';
import { readFile } from 'node:fs/promises';
import { cwd } from 'node:process';
import { setFailed, info } from '@actions/core';
import { context } from '@actions/github';
import { repo, owner, getOctokitClient } from './common';

/** There is more on the context than this
 *  but this is all I needed
 *  to get done with what I'm doing today.
 */
interface Context {
  eventName: 'deployment_status' | 'deployment';
  sha: string;
  ref: string;
  payload: {
    deployment: {
      sha: string;
      ref: string;
    };
    deployment_status: {
      state: 'error' | 'failure' | 'success';
      target_url: string;
      environment: string;
    };
  };
}

const SHA = process.env.SHA;
if (!SHA) {
  setFailed('No SHA was provided.');
  throw new Error('No SHA was provided.');
}

const getContext = () => context as unknown as Context;
const getTargetUrl = () => getContext().payload.deployment_status.target_url;
const getEnvironment = () =>
  getContext().payload.deployment_status.environment.split(' ').slice(-1)[0];

let checkId: string | null = null;

const main = async () => {
  const check = await getOctokitClient().rest.checks.create({
    owner,
    repo,
    name: `Playwright - ${getEnvironment()}`,
    head_sha: SHA,
    status: 'in_progress',
  });

  checkId = String(check.data.id);

  const packageJson = JSON.parse(
    await readFile(
      join(cwd(), `../../playwright/${getEnvironment()}/package.json`),
      'utf-8',
    ),
  ) as {
    devDependencies?: Record<string, string>;
  };

  const playwrightVersion = packageJson.devDependencies?.['@playwright/test'];
  if (!playwrightVersion?.length) {
    throw new Error("Couldn't get Playwright version from package.json.");
  }

  const dispatch = await getOctokitClient().rest.actions.createWorkflowDispatch(
    {
      workflow_id: `playwright-${getEnvironment()}.yml`,
      // Yes, this is hard-coded.
      // Limitations on GitHub actions for my use case.
      ref: 'main',
      owner,
      repo,
      inputs: {
        deployment_url: getTargetUrl(),
        check_run_id: String(check.data.id),
        playwright_version: playwrightVersion,
      },
    },
  );

  return { dispatch, check };
};

main()
  .then(({ check }) => {
    info(`Check created on PR: ${check.data.details_url ?? check.data.url}`);
    info(`Tests running...`);
  })
  .catch(async (err) => {
    await getOctokitClient().rest.checks.update({
      check_run_id: checkId,
      owner,
      repo,
      status: 'completed',
      conclusion: 'failure',
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access -- Yucky types from package.
    setFailed(err.message);
  });
