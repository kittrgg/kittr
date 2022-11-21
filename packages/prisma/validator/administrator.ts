import { AdminRole } from "@prisma/client"
import * as z from "zod"

export const AdministratorModel = z.object({
	id: z.string(),
	firebaseUserId: z.string(),
	role: z.nativeEnum(AdminRole)
})
