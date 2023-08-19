'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@kittr/ui/new';

export function DefaultErrorMessage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        variant="white"
      >
        Try again
      </Button>
    </div>
  );
}
