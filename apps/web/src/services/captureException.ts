import { captureException as sentryException } from '@kittr/logger/nextjs';

export const captureException = (error: Error) => {
  sentryException(error, { tags: { isKittr: true } });
};
