import { Prisma } from "@kittr/prisma"
import { serializeGame, deserializeGame } from "@Services/orm/utils/serializers/serializeGame"

const ChannelWithIncludeAll = Prisma.validator<Prisma.ChannelArgs>()({
	include: {
		profile: {
			include: {
				brandColors: true,
				channelPcSpecs: true,
				affiliates: true,
				setupPhotos: true
			}
		},
		kits: {
			include: {
				kitBase: true,
				options: true
			}
		},
		links: true,
		plan: true,
		games: {
			include: {}
		},
		gameAffiliateCodes: true
	}
})

type CompleteFullChannel = Prisma.ChannelGetPayload<typeof ChannelWithIncludeAll>

export const serializeFullChannelWithSerializedGames = (channel: CompleteFullChannel) => {
	const serializedChannel = {
		...channel,
		createdAt: channel.createdAt.toISOString(),
		games: channel.games.map((game) => serializeGame(game))
	}

	return serializedChannel
}

export type SerializeFullChannelWithSerializedGamesReturnType = ReturnType<
	typeof serializeFullChannelWithSerializedGames
>

export const deserializeFullChannelWithSerializedGames = (
	channel: SerializeFullChannelWithSerializedGamesReturnType
): CompleteFullChannel => {
	const deserializedGame = {
		...channel,
		createdAt: new Date(channel.createdAt),
		games: channel.games.map((game) => deserializeGame(game))
	}

	return deserializedGame
}

export type DeserializeFullChannelWithDeserializedGamesReturnType = ReturnType<
	typeof deserializeFullChannelWithSerializedGames
>
