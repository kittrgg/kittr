import { mockDeep } from "vitest-mock-extended";
import type prisma from ".";

export const prismaMock = mockDeep<typeof prisma>();
