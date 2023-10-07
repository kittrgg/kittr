import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { authedProcedure, publicProcedure } from '../../../initTRPC';
import * as ChannelsPlanService from '../../../services/channels/plan';
import { checkRole } from '../../../services/users';

const getPlan = publicProcedure
	.input(z.string())
	.query(async ({ input: id }) => {
		const result = await ChannelsPlanService.getPlan(id);
		return result;
	});

const getSubscriptionEnd = authedProcedure
	.input(
		z.object({
			channelId: z.string(),
			stripeSubscriptionId: z.string().optional(),
		}),
	)
	.query(async ({ ctx, input }) => {
		await checkRole({
			firebaseUserId: ctx.user.uid,
			channelId: input.channelId,
			roles: ['ADMIN', 'EDITOR', 'OWNER'],
		});

		if (!input.stripeSubscriptionId) {
			throw new TRPCError({
				code: 'BAD_REQUEST',
				message: "Couldn't find subscription id.",
			});
		}

		const result = await ChannelsPlanService.getSubscriptionEnd(
			input.stripeSubscriptionId,
		);
		return result;
	});

const getCardLast4Digits = authedProcedure
	.input(
		z.object({
			channelId: z.string(),
			stripeSubscriptionId: z.string().optional(),
		}),
	)
	.query(async ({ ctx, input }) => {
		await checkRole({
			firebaseUserId: ctx.user.uid,
			channelId: input.channelId,
			roles: ['ADMIN', 'EDITOR', 'OWNER'],
		});

		if (!input.stripeSubscriptionId) {
			throw new TRPCError({
				code: 'BAD_REQUEST',
				message: "Couldn't find subscription id.",
			});
		}

		const result = await ChannelsPlanService.getCardLast4Digits(
			input.stripeSubscriptionId,
		);
		return result;
	});

export const ChannelsPlanController = {
	getPlan,
	getSubscriptionEnd,
	getCardLast4Digits,
};
