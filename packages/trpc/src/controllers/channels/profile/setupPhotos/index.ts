import { z } from "zod";
import { authedProcedure } from "../../../../initTRPC";
import * as ChannelsProfileSetupPhotosService from "../../../../services/channels/profile/setupPhotos";
import { checkRole } from "../../../../services/users";

const updateSetupPhotos = authedProcedure
  .input(
    z.object({
      slot: z.number(),
      bool: z.boolean(),
      channelId: z.string(),
      channelProfileId: z.string(),
    }),
  )
  .mutation(async ({ input, ctx }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ["OWNER", "ADMIN"],
    });
    return await ChannelsProfileSetupPhotosService.updateSetupPhotos(input);
  });

export const ChannelsProfileSetupPhotosController = {
  updateSetupPhotos,
};
