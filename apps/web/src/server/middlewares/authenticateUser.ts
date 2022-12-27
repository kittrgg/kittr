import { Context } from "@Server/context"
import admin from "@Services/firebase/admin"
import { TRPCError } from "@trpc/server"
import { MiddlewareResult } from "@trpc/server/src/internals/middlewares"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type NextFunction<T> = {
	<T>(): Promise<MiddlewareResult<T>>
	<T>(opts: { ctx: T }): Promise<MiddlewareResult<T>>
}

export const authenticateUser = async ({ ctx, next }: { ctx: Context; next: NextFunction<typeof ctx> }) => {
	if (!ctx.userToken) {
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
