import { PrismaClient } from "@prisma/client"

const client = new PrismaClient({
	// log: ["query", "error", "warn"]
})

let globalThis = {
	prisma: undefined as typeof client | undefined
}

export const prisma = globalThis.prisma || client

if (process.env.NODE_ENV !== "production") {
	globalThis.prisma = prisma
}
