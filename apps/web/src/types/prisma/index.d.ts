import {
	Channel,
	ChannelLink,
	ChannelProfile,
	Game,
	ChannelAffiliateCode,
	ChannelCustomGameCommand,
	Kit,
	ChannelKitOverlay,
	ChannelManager,
	ChannelPlan,
	ChannelBrandColor,
	ChannelPcSpec,
	ChannelAffiliate,
	SetupPhoto,
	KitOption,
	KitBase
} from "@kittr/prisma"

export interface ChannelWithLinks extends Channel {
	links: ChannelLink[]
}

export interface ChannelWithProfile extends Channel {
	profile: ChannelProfile
}

export interface CompleteChannel extends Channel {
	games: Game[]
	affiliateCodes: ChannelAffiliateCode[]
	customGameCommands: ChannelCustomGameCommand[]
	kits: Kit[]
	overlay: ChannelKitOverlay[]
	managers: ChannelManager[]
	profile: ChannelProfile
	plan: ChannelPlan
	links: ChannelLink[]
}

export interface CompleteChannelProfile extends ChannelProfile {
	brandColors: ChannelBrandColor[]
	channelPcSpecs: ChannelPcSpec[]
	affiliates: ChannelAffiliate[]
	setupPhotos: SetupPhoto[]
}

export interface CompleteKit extends Kit {
	options: KitOption[]
	game: Game
	kitBase: KitBase
	channel: Channel
}

export interface CompleteChannelWithCompleteKits extends CompleteChannel {
	kits: CompleteKit[]
}

export interface CompleteProfile extends ChannelProfile {}

export interface SerializedChannel extends Omit<Channel, "createdAt"> {
	createdAt: string
}

export interface SerializedChannelWithProfile extends Omit<ChannelWithProfile, "createdAt"> {
	createdAt: string
}
