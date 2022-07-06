import { Context } from "@Server/context"
import { TRPCError } from "@trpc/server"
import admin from "@Services/firebase/admin"
import { MiddlewareResult } from "@trpc/server/src/internals/middlewares"
import { captureException } from "@sentry/node"

type NextFunction<T> = {
	<T>(): Promise<MiddlewareResult<T>>
	<T>(opts: { ctx: T }): Promise<MiddlewareResult<T>>
}

export const authenticateUser = async ({ ctx, next }: { ctx: Context; next: NextFunction<typeof ctx> }) => {

	if (!ctx.userToken) {
		captureException("User was not authorized!!!!")
		throw new TRPCError({
			code: "UNAUTHORIZED"
		})
	}
	const firebaseUser = await admin.verifyIdToken(ctx.userToken)

	// return firebaseUser
	return next({
		ctx: {
			user: firebaseUser
		}
	})
}
