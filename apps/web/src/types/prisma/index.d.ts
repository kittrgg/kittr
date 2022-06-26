import { WarzoneKit, WarzoneKitBase, WarzoneKitBaseCategory, WarzoneKitOption } from "@kittr/prisma"

interface KitBaseWithCategory extends WarzoneKitBase {
	category: WarzoneKitBaseCategory
}

export interface KitWithBaseInDisplayr extends WarzoneKit {
	base: KitBaseWithCategory
	options: WarzoneKitOption[]
}
