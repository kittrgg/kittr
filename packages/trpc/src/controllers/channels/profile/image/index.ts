import { authedProcedure } from '../../../../initTRPC';
import * as ChannelsProfileImageService from '../../../../services/channels/profile/image';
import { checkRole } from '../../../../services/users';
import { z } from 'zod';

const updateProfileImage = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ['OWNER', 'ADMIN'],
    });

    const channelProfile = await ChannelsProfileImageService.updateProfileImage(
      input,
    );
    return channelProfile;
  });

export const ChannelsProfileImageController = {
  updateProfileImage,
};
