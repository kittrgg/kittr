import { captureEvent as sentryEvent } from '@kittr/logger/nextjs';

export const captureException = (error: Error) => {
  sentryEvent(error, { captureContext: { tags: { isKittr: true } } });
};
