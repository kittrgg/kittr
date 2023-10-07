import { z } from 'zod';
import { publicProcedure } from '../../../../initTRPC';
import * as KitsOptionsService from '../../../../services/kits/options';

const listOptions = publicProcedure
	.input(
		z.object({
			kitBaseId: z.string(),
		}),
	)
	.query(async ({ input: { kitBaseId } }) => {
		const result = await KitsOptionsService.list({ kitBaseId });
		return result;
	});

export const KitsBasesOptionsController = {
	listOptions,
};
