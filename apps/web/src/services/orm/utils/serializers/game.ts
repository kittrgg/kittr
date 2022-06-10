import { Game } from "@kittr/prisma"

export type SerializeGameReturnType<T> = Omit<T, "releaseDate"> & { releaseDate: string }

// My goal is to take in any Game shape, whether it includes some extra fields or not.
// I also want to deserialize back to that type WITH A STRINGIFIED RELEASE DATE.

export const serializeGame = <T extends Game>(game: T): SerializeGameReturnType<T> => {
	const serializedGame = {
		...game,
		releaseDate: game.releaseDate.toISOString()
	}

	return serializedGame
}

export const deserializeGame = <T extends SerializeGameReturnType<T>>(
	game: T
): Omit<T, "releaseDate"> & { releaseDate: Date } => {
	const deserializedGame = {
		...game,
		releaseDate: new Date(game.releaseDate)
	}

	return deserializedGame
}

export type DeserializeGameReturnType = ReturnType<typeof deserializeGame>
