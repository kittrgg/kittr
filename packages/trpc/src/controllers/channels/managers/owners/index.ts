import { z } from 'zod';
import { authedProcedure } from '../../../../initTRPC';
import * as ChannelsManagersOwnersService from '../../../../services/channels/managers/owners';
import { checkRole } from '../../../../services/users';

const editOwner = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
      newOwnerEmail: z.string(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const { id } = await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ['OWNER'],
    });

    const channel = await ChannelsManagersOwnersService.editOwner({
      channelId: input.channelId,
      previousOwnerId: id,
      newOwnerEmail: input.newOwnerEmail,
    });
    return channel;
  });

export const ChannelsManagersOwnersController = {
  editOwner,
};
