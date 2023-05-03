import { adminProcedure } from '../../../initTRPC';
import * as AdminWarzoneService from '../../../services/admin/warzone';
import {
  WarzoneCommandCodeModel,
  WarzoneKitBaseModel,
  WarzoneKitOptionModel,
} from '@kittr/prisma/validator';
import { z } from 'zod';

const listKitBases = adminProcedure.query(async () => {
  return await AdminWarzoneService.listKitBases();
});

const getKitBase = adminProcedure
  .input(z.object({ kitBaseId: z.string() }))
  .query(async ({ input }) => {
    return await AdminWarzoneService.getKitBase(input);
  });

const listKitBaseCategories = adminProcedure.query(async () => {
  return await AdminWarzoneService.listKitBaseCategories();
});

export const createBase = adminProcedure
  .input(
    z.object({
      base: WarzoneKitBaseModel.omit({ id: true }),
      commandCodes: z.array(WarzoneCommandCodeModel),
      // categoryId: z.string(),
      // options: z.array(WarzoneKitOptionModel)
    }),
  )
  .mutation(async ({ input }) => {
    const updatedBase = await AdminWarzoneService.createKitBase({
      base: input.base,
      commandCodes: input.commandCodes.map((code) => code.code),
    });

    return updatedBase;
  });

export const updateBase = adminProcedure
  .input(
    z.object({
      base: WarzoneKitBaseModel,
    }),
  )
  .mutation(async ({ input }) => {
    const updatedBase = await AdminWarzoneService.updateKitBase({
      base: input.base,
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
    const updatedBase = await AdminWarzoneService.deleteKitBase({
      kitBaseId: input.kitBaseId,
    });

    return updatedBase;
  });

export const updateOptionsForBase = adminProcedure
  .input(
    z.object({
      baseId: z.string(),
      options: z.array(WarzoneKitOptionModel),
    }),
  )
  .mutation(async ({ input }) => {
    const updatedBase = await AdminWarzoneService.updateOptionsForBase({
      baseId: input.baseId,
      options: input.options,
    });

    return updatedBase;
  });

export const createOption = adminProcedure
  .input(
    z.object({
      baseId: z.string(),
      option: WarzoneKitOptionModel.omit({ id: true }),
    }),
  )
  .mutation(async ({ input }) => {
    const updatedBase = await AdminWarzoneService.createOption(input);
    return updatedBase;
  });

export const updateOption = adminProcedure
  .input(WarzoneKitOptionModel)
  .mutation(async ({ input }) => {
    const updatedBase = await AdminWarzoneService.updateOption(input);
    return updatedBase;
  });

export const deleteOption = adminProcedure
  .input(
    z.object({
      optionId: z.string(),
    }),
  )
  .mutation(async ({ input }) => {
    const deletedOption = await AdminWarzoneService.deleteOption(
      input.optionId,
    );
    return deletedOption;
  });

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
  deleteOption,
};
