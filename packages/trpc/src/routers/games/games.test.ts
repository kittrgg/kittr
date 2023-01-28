import { appRouter } from "../../../"
import { Game } from "@kittr/prisma"
import { prismaMock } from "@kittr/prisma/mock"
import {
	randNumber,
	randVehicle,
	randBoolean,
	randProductName,
	randPastDate,
	randUuid
} from "@ngneat/falso"

// Returns Warzone2 options if they're there
// Returns Warzone ones if they're not

describe("Kits router", () => {
	test("List all games", async () => {
		const id = randUuid()
		const date = randPastDate()

		const value: Game[] = [
			{
				active: randBoolean(),
				backgroundImageUrl: "/123.png",
				blurDataUrl: "/123.png",
				developer: randVehicle(),
				displayName: randProductName(),
				id,
				releaseDate: date,
				titleImageUrl: "/123.png",
				urlSafeName: randProductName()
			}
		]

		prismaMock.game.findMany.mockResolvedValueOnce(value)
		console.log(prismaMock)
		const caller = appRouter.createCaller({ userToken: undefined })
		const result = await caller.games.count()
		console.log(result)
		expect(result).toEqual({ count: 1 })
	})
})
