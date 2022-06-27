import { Context } from "@Server/context"
import { TRPCError } from "@trpc/server"
import admin from "@Services/firebase/admin"
import { MiddlewareResult } from "@trpc/server/src/internals/middlewares"
import { prisma } from '@kittr/prisma'

type NextFunction<T> = {
  <T>(): Promise<MiddlewareResult<T>>
  <T>(opts: { ctx: T }): Promise<MiddlewareResult<T>>
}

export const authenticateAdmin = async ({ ctx, next }: { ctx: Context; next: NextFunction<typeof ctx> }) => {

  if (!ctx.userToken) {
    throw new TRPCError({
      code: "UNAUTHORIZED"
    })
  }
  const firebaseUser = await admin.verifyIdToken(ctx.userToken)

  const administrator = await prisma.administrator.findFirst({
    where: {
      firebaseUserId: firebaseUser.uid
    },
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
}
