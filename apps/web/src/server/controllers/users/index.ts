import { publicProcedure } from "@Server/initTRPC"
import * as UsersService from "@Server/services/users"
import { z } from "zod"

const create = publicProcedure
	.input(
		z.object({
			displayName: z.string(),
			email: z.string(),
			password: z.string()
		})
	)
	.mutation(async ({ input }) => {
		const result = await UsersService.create(input)
		return result
	})

export const UsersController = {
	create
}
