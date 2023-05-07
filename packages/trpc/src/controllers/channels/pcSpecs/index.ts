import { ChannelPcSpecModel } from "@kittr/prisma/validator";
import { z } from "zod";
import { authedProcedure, publicProcedure } from "../../../initTRPC";
import * as ChannelsPcSpecsService from "../../../services/channels/pcSpecs";
import { checkRole } from "../../../services/users";

const listPcSpec = publicProcedure
  .input(
    z.object({
      channelId: z.string(),
    }),
  )
  .mutation(async ({ input }) => {
    const channel = await ChannelsPcSpecsService.listPcSpecs(input.channelId);
    return channel;
  });

const getPcSpec = publicProcedure
  .input(
    z.object({
      pcSpecId: z.string(),
    }),
  )
  .mutation(async ({ input }) => {
    const channel = await ChannelsPcSpecsService.getPcSpec(input.pcSpecId);
    return channel;
  });

const createPcSpec = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
      data: ChannelPcSpecModel.pick({ partName: true, partType: true }),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ["OWNER", "ADMIN"],
    });

    const channel = await ChannelsPcSpecsService.createPcSpec({
      channelId: input.channelId,
      data: input.data,
    });
    return channel;
  });

const updatePcSpec = authedProcedure
  .input(
    z.object({
      pcSpecId: z.string(),
      channelId: z.string(),
      data: ChannelPcSpecModel.pick({ partName: true, partType: true }),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ["OWNER", "ADMIN"],
    });

    const channel = await ChannelsPcSpecsService.updatePcSpec({
      pcSpecId: input.pcSpecId,
      channelId: input.channelId,
      data: input.data,
    });
    return channel;
  });

const deletePcSpec = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
      pcSpecId: z.string(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ["OWNER", "ADMIN"],
    });

    const channel = await ChannelsPcSpecsService.deletePcSpec({
      channelId: input.channelId,
      pcSpecId: input.pcSpecId,
    });
    return channel;
  });

export const ChannelsPcSpecsController = {
  listPcSpec,
  getPcSpec,
  createPcSpec,
  updatePcSpec,
  deletePcSpec,
};
