import { middleware } from "../"
import admin from "@Services/firebase/admin"
import { TRPCError } from "@trpc/server"

export const authenticateUser = middleware(async ({ ctx, next }) => {
	if (!ctx.userToken) {
		throw new TRPCError({
			code: "UNAUTHORIZED"
		})
	}
	const firebaseUser = await admin.verifyIdToken(ctx.userToken)

	return next({
		ctx: {
			user: firebaseUser
		}
	})
})
