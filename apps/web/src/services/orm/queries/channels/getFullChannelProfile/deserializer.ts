import { SerializeFullChannelProfileReturnType } from "./"
import { deserializeGame } from "../../../utils/serializers"

export const deserializeFullChannelProfile = (channel: SerializeFullChannelProfileReturnType) => {
	if (!channel) return null

	const deserializedGame = {
		...channel,
		createdAt: new Date(channel.createdAt),
		games: channel.games.map((game) => deserializeGame(game)),
		gameAffiliateCodes: channel.gameAffiliateCodes.map((gameAffiliateCode) => ({
			...gameAffiliateCode,
			game: deserializeGame(gameAffiliateCode.game)
		}))
	}

	return deserializedGame
}

export type DeserializeFullChannelProfileReturnType = ReturnType<typeof deserializeFullChannelProfile>
