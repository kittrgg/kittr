import { appRouter } from ".."
import { createContext } from "./context"
import { createProxySSGHelpers } from "@trpc/react-query/ssg"
import superjson from "superjson"

export const createSSGHelper = async () =>
	createProxySSGHelpers({
		router: appRouter,
		ctx: await createContext(),
		transformer: superjson
	})
