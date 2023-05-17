import { captureException } from '@sentry/nextjs';
import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

const myErrorHandler = (error: Error) => {
  captureException(error, { tags: { isKittr: true } });
};

function Fallback() {
  return <p>Something went wrong. Please reload the page.</p>;
}

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    // @ts-expect-error Super old library, pain.
    <ReactErrorBoundary FallbackComponent={Fallback} onError={myErrorHandler}>
      {children}
    </ReactErrorBoundary>
  );
}
