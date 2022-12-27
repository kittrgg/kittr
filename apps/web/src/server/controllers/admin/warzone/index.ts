import { createController } from "@Server/createController"
import { authenticateAdmin } from "@Server/middlewares/authenticateAdmin"
import * as AdminWarzoneService from "@Server/services/admin/warzone"
import { WarzoneCommandCodeModel, WarzoneKitBaseModel, WarzoneKitOptionModel } from "@kittr/prisma/validator"
import { z } from "zod"

const listKitBases = createController()
	.middleware(authenticateAdmin)
	.query("", {
		async resolve() {
			const result = await AdminWarzoneService.listKitBases()

			return result
		}
	})

const getKitBase = createController()
	.middleware(authenticateAdmin)
	.query("", {
		input: z.object({
			kitBaseId: z.string()
		}),
		async resolve({ input }) {
			const result = await AdminWarzoneService.getKitBase(input)

			return result
		}
	})

const listKitBaseCategories = createController()
	.middleware(authenticateAdmin)
	.query("", {
		async resolve() {
			const result = await AdminWarzoneService.listKitBaseCategories()

			return result
		}
	})

export const createBase = createController()
	.middleware(authenticateAdmin)
	.mutation("", {
		input: z.object({
			base: WarzoneKitBaseModel.omit({ id: true }),
			commandCodes: z.array(WarzoneCommandCodeModel)
			// categoryId: z.string(),
			// options: z.array(WarzoneKitOptionModel)
		}),
		async resolve({ input }) {
			const updatedBase = await AdminWarzoneService.createKitBase({
				base: input.base,
				commandCodes: input.commandCodes.map((code) => code.code)
			})

			return updatedBase
		}
	})

export const updateBase = createController()
	.middleware(authenticateAdmin)
	.mutation("", {
		input: z.object({
			base: WarzoneKitBaseModel
			// commandCodes: z.array(WarzoneCommandCodeModel),
			// categoryId: z.string(),
			// options: z.array(WarzoneKitOptionModel)
		}),
		async resolve({ input }) {
			const updatedBase = await AdminWarzoneService.updateKitBase({
				base: input.base
				// categoryId: input.categoryId,
				// commandCodes: input.commandCodes,
				// options: input.options
			})

			return updatedBase
		}
	})

export const deleteBase = createController()
	.middleware(authenticateAdmin)
	.mutation("", {
		input: z.object({
			kitBaseId: z.string()
		}),
		async resolve({ input }) {
			const updatedBase = await AdminWarzoneService.deleteKitBase({
				kitBaseId: input.kitBaseId
			})

			return updatedBase
		}
	})

export const updateOptionsForBase = createController()
	.middleware(authenticateAdmin)
	.mutation("", {
		input: z.object({
			baseId: z.string(),
			options: z.array(WarzoneKitOptionModel)
		}),
		async resolve({ input }) {
			const updatedBase = await AdminWarzoneService.updateOptionsForBase({
				baseId: input.baseId,
				options: input.options
			})

			return updatedBase
		}
	})

export const createOption = createController()
	.middleware(authenticateAdmin)
	.mutation("", {
		input: z.object({
			baseId: z.string(),
			option: WarzoneKitOptionModel.omit({ id: true })
		}),
		async resolve({ input }) {
			const updatedBase = await AdminWarzoneService.createOption(input)

			return updatedBase
		}
	})

export const updateOption = createController()
	.middleware(authenticateAdmin)
	.mutation("", {
		input: WarzoneKitOptionModel,
		async resolve({ input }) {
			const updatedBase = await AdminWarzoneService.updateOption(input)

			return updatedBase
		}
	})

export const deleteOption = createController()
	.middleware(authenticateAdmin)
	.mutation("", {
		input: z.object({
			optionId: z.string()
		}),
		async resolve({ input }) {
			const deletedOption = await AdminWarzoneService.deleteOption(input.optionId)

			return deletedOption
		}
	})

export const WarzoneAdminController = {
	listKitBases,
	getKitBase,
	listKitBaseCategories,
	createBase,
	updateBase,
	deleteBase,
	updateOptionsForBase,
	updateOption,
	createOption,
	deleteOption
}
