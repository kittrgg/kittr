import { captureEvent as sentryEvent } from '@sentry/nextjs';

export const captureException = (error: Error) => {
	sentryEvent(error, { captureContext: { tags: { isKittr: true } } });
};
