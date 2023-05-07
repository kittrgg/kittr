import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import superjson from 'superjson';
import { appRouter } from '..';
import { createContext } from './context';

export const createSSGHelper = async () =>
  createProxySSGHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson,
  });
