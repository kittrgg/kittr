import * as trpcServer from "@trpc/server"
import * as trpcNext from "@trpc/server/adapters/next"
import { NextPageContext } from "next"

export interface SSRContext extends NextPageContext {
	/**
	 * Set HTTP Status code
	 * @usage
	 * const utils = trpc.useContext();
	 * if (utils.ssrContext) {
	 *   utils.ssrContext.status = 404;
	 * }
	 */
	status?: number
}

interface CreateContextOptions {
	// session: Session | null
}

export async function createContextInner(_opts: CreateContextOptions) {
	return {}
}

export type Context = trpcServer.inferAsyncReturnType<typeof createContextInner>

export async function createContext(opts?: trpcNext.CreateNextContextOptions): Promise<Context> {
	// for API-response caching see https://trpc.io/docs/caching

	return await createContextInner({})
}
