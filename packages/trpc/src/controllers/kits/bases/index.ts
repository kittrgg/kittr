import { z } from 'zod';
import { publicProcedure } from '../../../initTRPC';
import * as KitsBasesService from '../../../services/kits/bases';

const listBases = publicProcedure
	.input(
		z.object({
			game: z.boolean().optional(),
			stats: z.boolean().optional(),
			commandCodes: z.boolean().optional(),
			availableOptions: z.boolean().optional(),
			category: z.boolean().optional(),
			kits: z.boolean().optional(),
		}),
	)
	.query(async ({ input }) => {
		const result = await KitsBasesService.listBases(input);
		return result;
	});

const listGameBases = publicProcedure
	.input(
		z.object({
			game: z.string(),
		}),
	)
	.query(async ({ input }) => {
		const result = await KitsBasesService.listGameBases(input.game);
		return result;
	});

export const KitsBasesController = {
	listBases,
	listGameBases,
};
