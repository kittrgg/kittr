import { createController } from "@Server/createController"
import * as KitsBasesService from "@Server/services/kits/bases"
import { z } from "zod"

const listBases = createController().query("", {
	input: z.object({
		game: z.boolean().optional(),
		stats: z.boolean().optional(),
		commandCodes: z.boolean().optional(),
		availableOptions: z.boolean().optional(),
		category: z.boolean().optional(),
		kits: z.boolean().optional()
	}),
	async resolve({ input }) {
		const result = await KitsBasesService.listBases(input)
		return result
	}
})


const listGameBases = createController().query("", {
	input: z.object({
		game: z.string()
	}),
	async resolve({ input }) {
		const result = await KitsBasesService.listGameBases( input.game )
		return result
	}
})

export const KitsBasesController = {
	listBases,
	listGameBases
}
