import { createController } from "@Server/createController"
import * as UsersService from "@Server/services/users"
import { z } from "zod"

const create = createController().mutation("", {
	input: z.object({
		displayName: z.string(),
		email: z.string(),
		password: z.string()
	}),
	async resolve({ input }) {
		const result = await UsersService.create(input)
		return result
	}
})

export const UsersController = {
	create
}
