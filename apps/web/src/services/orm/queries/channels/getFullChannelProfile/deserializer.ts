import { SerializeFullChannelProfileReturnType } from "./"
import { deserializeGame } from "../../../utils/serializers"

export const deserializeFullChannelProfile = (channel: SerializeFullChannelProfileReturnType) => {
	if (!channel) return null

	const deserializedGame = {
		...channel,
		createdAt: new Date(channel.createdAt),
		games: channel.games.map((game) => deserializeGame(game))
	}

	return deserializedGame
}

export type deserializeFullChannelProfileType = ReturnType<typeof deserializeFullChannelProfile>
