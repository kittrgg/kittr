import {
	Prisma,
	Channel,
	ChannelLink,
	ChannelProfile,
	Game,
	ChannelAffiliateCode,
	ChannelCustomGameCommand,
	Kit,
	ChannelKitOverlay,
	ChannelManager,
	ChannelPlan
} from "@kittr/prisma"

const GameWithIncludes = Prisma.validator<Prisma.GameArgs>()({
	include: { genres: true, platforms: true }
})

export type GameWithGenresAndPlatforms = Prisma.GameGetPayload<typeof GameWithIncludes>

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

export interface SerializedChannel extends Omit<Channel, "createdAt"> {
	createdAt: string
}

export interface SerializedChannelWithProfile extends Omit<ChannelWithProfile, "createdAt"> {
	createdAt: string
}
