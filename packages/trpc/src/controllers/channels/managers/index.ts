import { authedProcedure } from '../../../initTRPC';
import * as ChannelsManagersService from '../../../services/channels/managers';
import { checkRole } from '../../../services/users';
import { ChannelManagerModel } from '@kittr/prisma/validator';
import { z } from 'zod';

const listManagers = authedProcedure
  .input(
    z.object({
      managers: z.array(ChannelManagerModel),
      channelId: z.string(),
    }),
  )
  .query(async ({ ctx, input: { channelId, managers } }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId,
      roles: ['ADMIN', 'OWNER', 'EDITOR'],
    });
    if (managers.length === 0) return [];

    const result = ChannelsManagersService.listManagers({ managers });
    return result;
  });

const createManager = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
      data: z.object({
        email: z.string(),
        role: z.enum(['OWNER', 'ADMIN', 'EDITOR']),
      }),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ['OWNER', 'ADMIN'],
    });

    const manager = await ChannelsManagersService.createManager({
      channelId: input.channelId,
      email: input.data.email,
      role: input.data.role,
    });

    return manager;
  });

const demoteManager = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
      managerIdToDemote: z.string(),
    }),
  )
  .mutation(async ({ ctx, input: { channelId, managerIdToDemote } }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId,
      roles: ['OWNER'],
    });

    const channel = await ChannelsManagersService.demoteManager({
      channelId,
      managerIdToDemote,
    });

    return channel;
  });

const promoteManager = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
      managerIdToPromote: z.string(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ['OWNER', 'ADMIN'],
    });

    const channel = await ChannelsManagersService.promoteManager({
      channelId: input.channelId,
      managerIdToPromote: input.managerIdToPromote,
    });
    return channel;
  });

const deleteManager = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
      managerIdToDelete: z.string(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ['OWNER'],
    });

    const channel = await ChannelsManagersService.deleteManager({
      channelId: input.channelId,
      managerIdToDelete: input.managerIdToDelete,
    });
    return channel;
  });

export const ChannelsManagersController = {
  listManagers,
  createManager,
  promoteManager,
  demoteManager,
  deleteManager,
};
