import * as trpcNext from "@trpc/server/adapters/next"
import { createContext } from "@Server/context"
import { appRouter } from "@Server/index"
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next"
import { captureMessage } from "@sentry/nextjs"

// export type definition of API
export type AppRouter = typeof appRouter

const handleOptionsMethod = (handler: NextApiHandler) => {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		captureMessage(`User with auth: ${JSON.stringify(req.headers.authorization)}`)
		if (req.method === "OPTIONS") return res.send(200)
		captureMessage(`User with auth2: ${JSON.stringify(req.headers.authorization)}`)
		return handler(req, res)
	}
}

// export API handler
export default handleOptionsMethod(trpcNext.createNextApiHandler({
	router: appRouter,
	createContext: createContext,
	batching: {
		enabled: true
	}
}))
