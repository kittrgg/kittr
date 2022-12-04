import * as z from "zod"
import { AdminRole } from "@prisma/client"

export const AdministratorModel = z.object({
	id: z.string(),
	firebaseUserId: z.string(),
	role: z.nativeEnum(AdminRole)
})
