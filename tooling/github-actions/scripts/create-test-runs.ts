import { setFailed } from '@actions/core';
import { context, getOctokit } from '@actions/github';

interface Context {
  eventName: 'deployment_status' | 'deployment';
  ref: string;
  payload: {
    deployment: {
      ref: string;
    };
    deployment_status: {
      state: 'error' | 'failure' | 'success';
      target_url: string;
      environment: string;
    };
  };
}

// eslint-disable-next-line turbo/no-undeclared-env-vars
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export function getOctokitClient(): ReturnType<typeof getOctokit> {
  if (!GITHUB_TOKEN) {
    const errorMessage = 'GITHUB_TOKEN is not defined';
    setFailed(errorMessage);
    throw new Error(errorMessage);
  }

  return getOctokit(GITHUB_TOKEN);
}

const getContext = () => context as unknown as Context;
const getTargetUrl = () => getContext().payload.deployment_status.target_url;
const getRef = () => getContext().payload.deployment.ref;
const getEnvironment = () => getContext().payload.deployment_status.environment;

if (getContext().payload.deployment_status.state === 'success') {
  getOctokitClient()
    .rest.actions.createWorkflowDispatch({
      workflow_id: `playwright-${getEnvironment().split(' ').slice(-1)[0]}.yml`,
      ref: getRef(),
      owner: 'kittrgg',
      repo: 'kittr',
      inputs: {
        deployment_url: getTargetUrl(),
      },
    })
    // eslint-disable-next-line no-console
    .then((res) => console.log({ res }))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    .catch((err) => setFailed(err.message));
}
