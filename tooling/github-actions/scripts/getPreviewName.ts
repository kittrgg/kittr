import { setOutput, setFailed } from '@actions/core';
import { context } from '@actions/github';

interface Context {
  eventName: 'deployment_status' | 'deployment';
  payload: {
    deployment_status: {
      state: 'error' | 'failure' | 'success';
      target_url: string;
      environment: string;
    };
  };
}

const getContext = () => context as unknown as Context;

try {
  console.log(context);
  const deploymentUrl = getContext().payload.deployment_status.target_url;
  console.log(deploymentUrl);
  setOutput('deployment_url', deploymentUrl);

  const environment = getContext()
    .payload.deployment_status.environment.split(' ')
    .slice(-1);
  console.log(environment);
  setOutput('environment', environment);
} catch (error: unknown) {
  // @ts-expect-error Not going to worry about this.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  setFailed(error.message);
}
