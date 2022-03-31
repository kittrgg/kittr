import { Kit, KitBase, KitBaseCategory } from "@kittr/prisma"

interface KitBaseWithCategory extends KitBase {
	category: KitBaseCategory
}

export interface KitWithBaseInDisplayr extends Kit {
	kitBase: KitBaseWithCategory
}
