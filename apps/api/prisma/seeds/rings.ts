import { getRandomValueFromArray } from "../../src/utils/randomFromArray"

export const createRings = (trialDayIds: string[]) => {
	const rings = [...Array(4)].map(() => ({
		trialDayId: getRandomValueFromArray(trialDayIds)
	}))

	return rings
}
