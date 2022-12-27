import { Game, KitBase, Kit, ChannelAffiliateCode } from "@kittr/prisma"

interface CompleteChannelAffiliateCode extends ChannelAffiliateCode {
	game: Game
}

interface CompleteKit extends Kit {
	kitBase: KitBase
}
