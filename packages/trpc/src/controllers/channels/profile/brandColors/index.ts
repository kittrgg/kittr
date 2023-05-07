import { z } from "zod";
import { authedProcedure } from "../../../../initTRPC";
import * as ChannelsBrandColorsService from "../../../../services/channels";
import { checkRole } from "../../../../services/users";

const upsertBrandColor = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
      newColor: z.string(),
      colorId: z.string().optional(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ["OWNER", "ADMIN"],
    });

    const channel = await ChannelsBrandColorsService.upsertBrandColor({
      channelId: input.channelId,
      colorId: input.colorId,
      newColor: input.newColor,
    });

    return channel;
  });

export const ChannelsProfileBrandColorsController = {
  upsertBrandColor,
};
