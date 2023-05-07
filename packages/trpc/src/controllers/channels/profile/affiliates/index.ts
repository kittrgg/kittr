import { ChannelAffiliateModel } from "@kittr/prisma/validator";
import { z } from "zod";
import { authedProcedure } from "../../../../initTRPC";
import * as ChannelsService from "../../../../services/channels";
import { checkRole } from "../../../../services/users";

const createAffiliate = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
      data: ChannelAffiliateModel.omit({ id: true }),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ["OWNER", "ADMIN"],
    });

    const channel = await ChannelsService.createAffiliate({
      channelId: input.channelId,
      data: input.data,
    });

    return channel;
  });

const updateAffiliate = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
      data: ChannelAffiliateModel,
    }),
  )
  .mutation(async ({ ctx, input }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ["OWNER", "ADMIN"],
    });

    const channel = await ChannelsService.updateAffiliate({
      data: input.data,
    });
    return channel;
  });

const deleteAffiliate = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
      affiliateId: z.string(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ["OWNER", "ADMIN"],
    });

    const channel = await ChannelsService.deleteAffiliate(input);
    return channel;
  });

export const ChannelsProfileAffiliatesController = {
  createAffiliate,
  updateAffiliate,
  deleteAffiliate,
};
