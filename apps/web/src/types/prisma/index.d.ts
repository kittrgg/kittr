import type {
	WarzoneKit,
	WarzoneKitBase,
	WarzoneKitBaseCategory,
} from '@kittr/prisma';

interface KitBaseWithCategory extends WarzoneKitBase {
	category: WarzoneKitBaseCategory;
}

export interface KitWithBaseInDisplayr extends WarzoneKit {
	base: KitBaseWithCategory;
}
