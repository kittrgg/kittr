import { KitsBasesOptionsController } from '../../controllers/kits/bases/options';
import { router } from '../../initTRPC';

export const kitsRouter = router({
	bases: router({
		options: router({
			list: KitsBasesOptionsController.listOptions,
		}),
	}),
});
