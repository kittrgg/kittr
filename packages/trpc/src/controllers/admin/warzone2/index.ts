import { prisma } from '@kittr/prisma';
import {
	WarzoneTwoKitBaseModel,
	WarzoneTwoKitOptionModel,
} from '@kittr/prisma/validator';
import { z } from 'zod';
import * as AdminWarzone2Service from '../../../services/admin/warzone2';
import { adminProcedure } from '../../../initTRPC';

const listKitBases = adminProcedure.query(async () => {
	const result = await AdminWarzone2Service.listKitBases();
	return result;
});

const getKitBase = adminProcedure
	.input(
		z.object({
			kitBaseId: z.string(),
		}),
	)
	.query(async ({ input }) => {
		const result = await AdminWarzone2Service.getKitBase(input);

		return result;
	});

const listKitBaseCategories = adminProcedure.query(async () => {
	const result = await AdminWarzone2Service.listKitBaseCategories();
	return result;
});

export const createBase = adminProcedure
	.input(
		z.object({
			base: WarzoneTwoKitBaseModel.omit({ id: true }),
			commandCodes: z.string(),
		}),
	)
	.mutation(async ({ input }) => {
		const commandCodesArr = input.commandCodes
			.split(',')
			.map((el) => el.trim());

		const updatedBase = await AdminWarzone2Service.createKitBase({
			base: input.base,
			commandCodes: commandCodesArr,
		});

		return updatedBase;
	});

export const updateBase = adminProcedure
	.input(
		z.object({
			base: WarzoneTwoKitBaseModel,
			commandCodes: z.string().nullable(),
		}),
	)
	.mutation(async ({ input }) => {
		await prisma.warzoneTwoCommandCode.deleteMany({
			where: {
				kitBaseId: input.base.id,
			},
		});

		const updatedBase = await AdminWarzone2Service.updateKitBase({
			base: input.base,
			commandCodes: input.commandCodes?.split(',') ?? null,
		});

		return updatedBase;
	});

export const deleteBase = adminProcedure
	.input(
		z.object({
			kitBaseId: z.string(),
		}),
	)
	.mutation(async ({ input }) => {
		const updatedBase = await AdminWarzone2Service.deleteKitBase({
			kitBaseId: input.kitBaseId,
		});

		return updatedBase;
	});

export const updateOptionsForBase = adminProcedure
	.input(
		z.object({
			baseId: z.string(),
			options: z.array(WarzoneTwoKitOptionModel),
		}),
	)
	.mutation(async ({ input }) => {
		const updatedBase = await AdminWarzone2Service.updateOptionsForBase({
			baseId: input.baseId,
			options: input.options,
		});

		return updatedBase;
	});

export const createOption = adminProcedure
	.input(
		z.object({
			baseId: z.string(),
			option: WarzoneTwoKitOptionModel.omit({ id: true }),
		}),
	)
	.mutation(async ({ input }) => {
		const updatedBase = await AdminWarzone2Service.createOption(input);
		return updatedBase;
	});

export const updateOption = adminProcedure
	.input(WarzoneTwoKitOptionModel)
	.mutation(async ({ input }) => {
		const updatedBase = await AdminWarzone2Service.updateOption(input);
		return updatedBase;
	});

export const deleteOption = adminProcedure
	.input(
		z.object({
			optionId: z.string(),
		}),
	)
	.mutation(async ({ input }) => {
		const deletedOption = await AdminWarzone2Service.deleteOption(
			input.optionId,
		);

		return deletedOption;
	});

export const Warzone2AdminController = {
	listKitBases,
	getKitBase,
	listKitBaseCategories,
	createBase,
	updateBase,
	deleteBase,
	updateOptionsForBase,
	updateOption,
	createOption,
	deleteOption,
};
