import { Prisma } from "@kittr/prisma"
import { Optional } from "@Types/index"

export const ChannelIncludeAll = Prisma.validator<Prisma.ChannelArgs>()({
	include: {
		games: true,
		gameAffiliateCodes: true,
		customGameCommands: true,
		kits: true,
		overlay: true,
		managers: true,
		profile: true,
		plan: true,
		links: true
	}
})

type CompleteChannel = Prisma.ChannelGetPayload<typeof ChannelIncludeAll>

type PartialCompleteChannel = Optional<
	CompleteChannel,
	"games" | "gameAffiliateCodes" | "customGameCommands" | "kits" | "overlay" | "managers" | "profile" | "plan" | "links"
>

export const serializeChannel = (channel: PartialCompleteChannel) => {
	const serializedChannel = {
		...channel,
		createdAt: channel.createdAt.toISOString()
	}

	return serializedChannel
}

export type SerializeChannelReturnType = ReturnType<typeof serializeChannel>

export const deserializeChannel = (channel: SerializeChannelReturnType): PartialCompleteChannel => {
	const deserializedChannel = {
		...channel,
		createdAt: new Date(channel.createdAt)
	}

	return deserializedChannel
}
