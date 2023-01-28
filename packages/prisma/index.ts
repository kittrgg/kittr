import { prismaMock } from "./mock"
import { PrismaClient } from "@prisma/client"

export let prisma: PrismaClient

if (typeof window === "undefined") {
	if (process.env.NODE_ENV === "test") {
		prisma = prismaMock
	} else if (process.env.NODE_ENV === "production") {
		prisma = new PrismaClient()
	} else {
		if (!(global as any).prisma) {
			// eslint-disable-next-line @typescript-eslint/no-extra-semi
			;(global as any).prisma = new PrismaClient()
		}

		prisma = (global as any).prisma
	}
}

export default prisma

export * from "@prisma/client"
