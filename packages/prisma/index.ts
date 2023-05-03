import { PrismaClient } from "@prisma/client"

export let prisma: PrismaClient

if (typeof window === "undefined") {
	if (process.env.NODE_ENV === "test") {
		import(`${__dirname  }/mock.ts`).then((mock) => (prisma = mock.prismaMock))
	} else if (process.env.NODE_ENV === "production") {
		prisma = new PrismaClient()
	} else {
		if (!(global as any).prisma) {
			;(global as any).prisma = new PrismaClient()
		}

		prisma = (global as any).prisma
	}
}

export default prisma

export * from "@prisma/client"
