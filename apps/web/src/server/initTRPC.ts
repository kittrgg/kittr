import { Context } from "@Server/context"
import admin from "@Services/firebase/admin"
import { captureMessage } from "@kittr/logger/node"
import { prisma } from "@kittr/prisma"
import { initTRPC, TRPCError } from "@trpc/server"
import superjson from "superjson"

export const t = initTRPC.context<Context>().create({
	transformer: superjson,
	errorFormatter({ shape, error, path, type, input, ctx }) {
		captureMessage(`${error.code}: ${path}` ?? "Unknown tRPC path", {
			level: "error",
			tags: { isKittr: true },
			extra: { type },
			contexts: { error: { ...error }, ctx: { ...ctx }, input: { input: JSON.stringify(input) } }
		})
		return shape
	}
})
export const middleware = t.middleware

export const authenticateAdmin = middleware(async ({ ctx, next }) => {
	if (!ctx.userToken) {
		throw new TRPCError({
			code: "UNAUTHORIZED"
		})
	}

	console.warn({ userToken: ctx.userToken })

	const firebaseUser = await admin.verifyIdToken(ctx.userToken)

	console.warn({ firebaseUser })

	const administrator = await prisma.administrator.findFirst({
		where: {
			firebaseUserId: firebaseUser.uid
		}
	})

	if (!administrator) {
		throw new TRPCError({
			code: "UNAUTHORIZED",
			message: "It doesn't look like you're a site administrator."
		})
	}

	return next({
		ctx: {
			user: firebaseUser,
			adminUser: administrator
		}
	})
})

export const authenticateUser = middleware(async ({ ctx, next }) => {
	if (!ctx.userToken) {
		throw new TRPCError({
			code: "UNAUTHORIZED"
		})
	}

	console.warn({ token: ctx.userToken })

	const firebaseUser = await admin.verifyIdToken(ctx.userToken)

	console.warn({ firebaseUser })

	return next({
		ctx: {
			user: firebaseUser
		}
	})
})

export const mergeRouters = t.mergeRouters
export const publicProcedure = t.procedure
export const router = t.router
export const adminProcedure = t.procedure.use(authenticateAdmin)
export const authedProcedure = t.procedure.use(authenticateUser)
