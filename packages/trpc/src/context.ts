import type * as trpc from '@trpc/server';
import type * as trpcNext from '@trpc/server/adapters/next';

export interface CreateContextOptions {
	userToken: string | undefined;
}

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */
export async function createContextInner(_opts: CreateContextOptions) {
	return _opts;
}

export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(
	opts?: trpcNext.CreateNextContextOptions,
): Promise<Context> {
	// For API-response caching see https://trpc.io/docs/caching
	const userToken = opts?.req.headers.authorization;

	return await createContextInner({ userToken });
}
