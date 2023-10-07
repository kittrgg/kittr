import { publicProcedure } from '../../initTRPC';
import * as KitsService from '../../services/kits';

const countKits = publicProcedure.query(async () => {
	const result = await KitsService.countKits();
	return result;
});

export const KitsController = {
	countKits,
};
