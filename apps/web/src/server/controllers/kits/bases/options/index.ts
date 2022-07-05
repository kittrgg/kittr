import { createController } from "@Server/createController"
import * as KitsOptionsService from "@Server/services/kits/options"
import { z } from "zod"

const list = createController().query("", {
	input: z.object({
		kitBaseId: z.string()
	}),
	async resolve({ input: { kitBaseId } }) {
		const result = await KitsOptionsService.list({ kitBaseId })
		return result
	}
})

export const KitsBasesOptionsController = {
	list
}