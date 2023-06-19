import * as Sentry from '@kittr/logger/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN,
  // enabled: process.env.VERCEL_ENV !== 'development',
  environment: process.env.VERCEL_ENV,
  tracesSampleRate: 1.0,
});
