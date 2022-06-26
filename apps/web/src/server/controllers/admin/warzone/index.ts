import { createController } from "@Server/createController"
import * as WarzoneAdminService from "@Server/services/admin/warzone"
import { z } from "zod"

const listKitBases = createController().query("", {
	input: z.object({}),
	async resolve({ input }) {
		const result = await WarzoneAdminService.listKistBases()

		return result
	}
})

export const WarzoneAdminController = {
	listKitBases
}
