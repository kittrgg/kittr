import { ChannelModel } from '@kittr/prisma/validator';
import Stripe from 'stripe';
import { z } from 'zod';
import { authedProcedure, publicProcedure } from '../../initTRPC';
import * as ChannelsService from '../../services/channels';
import { checkRole } from '../../services/users';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

const listTopChannels = publicProcedure
  .input(
    z.object({
      skip: z.number().optional(),
      take: z.number().optional(),
    }),
  )
  .query(async ({ input: { skip, take } }) => {
    const result = await ChannelsService.listTopChannels({ skip, take });
    return result;
  });

// All channels on kittr
const countAllChannels = publicProcedure.query(async () => {
  const total = await ChannelsService.countAllChannels();
  return total;
});

// Counts channels per game
const countChannels = publicProcedure
  .input(z.string().optional())
  .query(async ({ input: urlSafeName }) => {
    const total = await ChannelsService.countChannels(urlSafeName);
    return total;
  });

const listRisingChannels = publicProcedure.query(async () => {
  const result = await ChannelsService.listRisingChannels();
  return result;
});

const listLiveChannels = publicProcedure.query(async () => {
  const result = await ChannelsService.listLiveChannels();
  return result;
});

const getDashboardChannel = authedProcedure
  .input(z.string())
  .query(async ({ ctx, input }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input,
      roles: ['ADMIN', 'EDITOR', 'OWNER'],
    });

    const channel = await ChannelsService.getDashboardChannel({ id: input });
    return channel;
  });

const getChannelProfile = publicProcedure
  .input(z.string())
  .query(async ({ input: urlSafeName }) => {
    const channel = await ChannelsService.getChannelProfileByUrlSafeName(
      urlSafeName,
    );
    return channel;
  });

const createChannel = authedProcedure
  .input(
    z
      .string()
      .min(1, 'You must provide a display name.')
      .max(25, 'That channel name is too long. 25 characters or less.'),
  )
  .mutation(async ({ ctx, input: displayName }) => {
    const channel = await ChannelsService.createChannel({
      displayName,
      ownerFirebaseId: ctx.user.uid,
    });
    return channel;
  });

const updateChannel = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
      data: ChannelModel.partial(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId: input.channelId,
      roles: ['OWNER', 'ADMIN'],
    });

    const channel = await ChannelsService.updateChannel({
      channelId: input.channelId,
      data: input.data,
    });
    return channel;
  });

const deleteChannel = authedProcedure
  .input(
    z.object({
      channelId: z.string(),
    }),
  )
  .mutation(async ({ ctx, input: { channelId } }) => {
    await checkRole({
      firebaseUserId: ctx.user.uid,
      channelId,
      roles: ['OWNER'],
    });

    const channel = await ChannelsService.deleteChannel({ channelId });

    if (channel.plan?.stripeSubscriptionId) {
      await stripe.subscriptions.del(channel.plan.stripeSubscriptionId);
    }

    return channel;
  });

export const ChannelsController = {
  listTopChannels,
  listRisingChannels,
  listLiveChannels,
  getDashboardChannel,
  getChannelProfile,
  createChannel,
  updateChannel,
  deleteChannel,
  countChannels,
  countAllChannels,
};
