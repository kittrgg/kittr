import { Prisma } from "@kittr/prisma"
import { Optional } from "@Types/index"

export const GameIncludeAll = Prisma.validator<Prisma.GameArgs>()({
	include: {
		genres: true,
		platforms: true,
		kitBases: true,
		channels: true,
		channelAffiliateCodes: true,
		customCommandStrings: true,
		kits: true
	}
})

type CompleteGame = Prisma.GameGetPayload<typeof GameIncludeAll>

type PartialCompleteGame = Optional<
	CompleteGame,
	"genres" | "platforms" | "kitBases" | "channels" | "channelAffiliateCodes" | "customCommandStrings" | "kits"
>

export const serializeGame = (game: PartialCompleteGame) => {
	const serializedGame = {
		...game,
		releaseDate: game.releaseDate.toISOString()
	}

	return serializedGame
}

export type SerializeGameReturnType = ReturnType<typeof serializeGame>

export const deserializeGame = (game: SerializeGameReturnType): PartialCompleteGame => {
	const deserializedGame = {
		...game,
		releaseDate: new Date(game.releaseDate)
	}

	return deserializedGame
}
