import { Game, KitBase, Kit, Channel, ChannelAffiliateCode } from "@kittr/prisma"

interface CompleteChannelAffiliateCode extends ChannelAffiliateCode {
	game: Game
}

interface CompleteKit extends Kit {
	kitBase: KitBase
}

export interface CompleteChannel extends Channel {
	kits: CompleteKit[]
	games: Game[]
	gameAffiliateCodes: CompleteChannelAffiliateCode[]
}
