import { createContext } from "@Server/context"
import { appRouter } from "@Server/index"
import { createProxySSGHelpers } from "@trpc/react-query/ssg"
import superjson from "superjson"

export const createSSGHelper = async () =>
	createProxySSGHelpers({
		router: appRouter,
		ctx: await createContext(),
		transformer: superjson
	})
