import { PrismaClient } from "@prisma/client"

declare global {
	var prisma: PrismaClient
}

export let prisma: PrismaClient

if (typeof window === "undefined") {
	// This is here because Nextjs...something about the dev environment...
	if (process.env.NODE_ENV === "production") {
		prisma = new PrismaClient()
	} else {
		if (!global.prisma) {
			global.prisma = new PrismaClient()
		}

		prisma = global.prisma
	}
}

export default prisma

export * from "@prisma/client"
