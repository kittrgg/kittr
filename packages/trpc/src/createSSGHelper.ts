import { createServerSideHelpers } from '@trpc/react-query/server';
import superjson from 'superjson';
import { appRouter } from '..';
import { createContext } from './context';

export const createSSGHelper = async () =>
	createServerSideHelpers({
		router: appRouter,
		ctx: await createContext(),
		transformer: superjson,
	});
