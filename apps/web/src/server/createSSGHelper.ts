import { createContext } from "@Server/context"
import { appRouter } from "@Server/index"
import { createSSGHelpers as createTrcpSsgHelpers } from "@trpc/react/ssg"
import superjson from "superjson"

export const createSSGHelper = async () =>
	createTrcpSsgHelpers({
		router: appRouter,
		ctx: await createContext(),
		transformer: superjson
	})
