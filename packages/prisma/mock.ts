import prisma from "."
import { mockDeep } from "vitest-mock-extended"

export const prismaMock = mockDeep<typeof prisma>()
