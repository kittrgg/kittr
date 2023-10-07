import { ChannelCreatorCodeModel } from '@kittr/prisma/validator';
import { z } from 'zod';
import { authedProcedure } from '../../../../initTRPC';
import * as ChannelsProfileCreatorCodesService from '../../../../services/channels/profile/creatorCodes';
import { checkRole } from '../../../../services/users';

const upsertCode = authedProcedure
	.input(
		z.object({
			code: ChannelCreatorCodeModel.partial({ id: true }),
		}),
	)
	.mutation(async ({ ctx, input }) => {
		await checkRole({
			firebaseUserId: ctx.user.uid,
			channelId: input.code.channelId,
			roles: ['OWNER', 'ADMIN'],
		});

		const channel = await ChannelsProfileCreatorCodesService.upsertCode({
			codeUpdate: input.code,
		});

		return channel;
	});

export const ChannelsProfileCreatorCodesController = {
	upsertCode,
};
