import { Kit, KitBase, KitBaseCategory, KitStat, KitOption } from "@kittr/prisma"

interface KitBaseWithCategoryAndStats extends KitBase {
	category: KitBaseCategory
	stats: KitStat[]
}

export interface KitWithBaseInDisplayr extends Kit {
	base: KitBaseWithCategoryAndStats
	options: KitOption[]
}
