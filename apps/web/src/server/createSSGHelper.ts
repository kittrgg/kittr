import { createSSGHelpers as createTrcpSsgHelpers } from "@trpc/react/ssg"
import { appRouter } from "@Server/index"
import { createContext } from "@Server/context"
import superjson from "superjson"

export const createSSGHelper = async () =>
	createTrcpSsgHelpers({
		router: appRouter,
		ctx: await createContext(),
		transformer: superjson
	})
