import { Kit, KitBase, KitBaseCategory, KitStat } from "@kittr/prisma"

interface KitBaseWithCategoryAndStats extends KitBase {
	category: KitBaseCategory
	stats: KitStat[]
}

export interface KitWithBaseInDisplayr extends Kit {
	kitBase: KitBaseWithCategoryAndStats
}
