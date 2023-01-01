import { middleware } from "../"
import admin from "@Services/firebase/admin"
import { prisma } from "@kittr/prisma"
import { TRPCError } from "@trpc/server"

// export const authenticateAdmin = middleware(async ({ ctx, next }) => {
// 	if (!ctx.userToken) {
// 		throw new TRPCError({
// 			code: "UNAUTHORIZED"
// 		})
// 	}
// 	const firebaseUser = await admin.verifyIdToken(ctx.userToken)

// 	const administrator = await prisma.administrator.findFirst({
// 		where: {
// 			firebaseUserId: firebaseUser.uid
// 		}
// 	})

// 	if (!administrator) {
// 		throw new TRPCError({
// 			code: "UNAUTHORIZED",
// 			message: "It doesn't look like you're a site administrator."
// 		})
// 	}

// 	return next({
// 		ctx: {
// 			user: firebaseUser,
// 			adminUser: administrator
// 		}
// 	})
// })
