import { Kit, KitBase, KitBaseCategory, KitStat } from "@kittr/prisma"

interface KitBaseWithCategory extends KitBase {
	category: KitBaseCategory
	stats: KitStat[]
}

export interface KitWithBaseInDisplayr extends Kit {
	kitBase: KitBaseWithCategory
}
