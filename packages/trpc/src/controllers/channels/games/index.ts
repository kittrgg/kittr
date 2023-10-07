import { z } from 'zod';
import { authedProcedure, publicProcedure } from '../../../initTRPC';
import * as ChannelsService from '../../../services/channels';
import { checkRole } from '../../../services/users';

const addGameToChannel = authedProcedure
	.input(
		z.object({
			channelId: z.string(),
			gameId: z.string(),
		}),
	)
	.mutation(async ({ ctx, input: { channelId, gameId } }) => {
		await checkRole({
			firebaseUserId: ctx.user.uid,
			channelId,
			roles: ['ADMIN', 'OWNER'],
		});

		const channel = await ChannelsService.addGame({ channelId, gameId });
		return channel;
	});

const deleteGameFromChannel = authedProcedure
	.input(
		z.object({
			channelId: z.string(),
			gameId: z.string(),
		}),
	)
	.mutation(async ({ ctx, input: { channelId, gameId } }) => {
		await checkRole({
			firebaseUserId: ctx.user.uid,
			channelId,
			roles: ['ADMIN', 'OWNER'],
		});

		const channel = await ChannelsService.deleteGame({ channelId, gameId });
		return channel;
	});

const listChannelsForGame = publicProcedure
	.input(
		z.object({
			urlSafeName: z.string(),
			take: z.number(),
			skip: z.number(),
		}),
	)
	.query(async ({ input: { urlSafeName, take, skip } }) => {
		const channels = await ChannelsService.getChannelsByGame({
			urlSafeName,
			take,
			skip,
		});
		return channels;
	});

export const ChannelsGamesController = {
	addGameToChannel,
	deleteGameFromChannel,
	listChannelsForGame,
};
