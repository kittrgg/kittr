import * as trpcNext from "@trpc/server/adapters/next"
import Cors from 'cors'
import { createContext } from "@Server/context"
import { appRouter } from "@Server/index"
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next"

// export type definition of API
export type AppRouter = typeof appRouter

const handleOptionsMethod = (handler: NextApiHandler) => {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		if (req.method === "OPTIONS") return res.send(200)
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
