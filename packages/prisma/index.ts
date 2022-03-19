import { PrismaClient } from "@prisma/client"

export const prisma: PrismaClient =
	(globalThis as any).prisma ||
	new PrismaClient({
		// TODO: Turn these on for production!
		// log: ["query", "error", "warn"]
	})

if (process.env.NODE_ENV !== "production") {
	;(globalThis as any).prisma = prisma
}

export * from "@prisma/client"
