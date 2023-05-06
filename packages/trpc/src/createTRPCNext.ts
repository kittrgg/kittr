import { getToken } from '@kittr/firebase/auth';
import type { QueryClientConfig } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { createTRPCNext } from '@trpc/next';
import superjson from 'superjson';
import type { AppRouter } from '..';

interface Params {
  url: string;
  queryClientConfig?: QueryClientConfig;
}

export const trpc = ({ url, queryClientConfig }: Params) =>
  createTRPCNext<AppRouter>({
    config() {
      return {
        url,
        transformer: superjson,
        links: [
          // Adds pretty logs to your console in development and logs errors in production
          loggerLink({
            enabled: (opts) =>
              process.env.NODE_ENV === 'development' ||
              (opts.direction === 'down' && opts.result instanceof Error),
          }),
          httpBatchLink({
            url,
            headers: async () => ({
              authorization: await getToken(),
            }),
          }),
        ],
        queryClientConfig,
      };
    },
    // Ssr: true,
  });
