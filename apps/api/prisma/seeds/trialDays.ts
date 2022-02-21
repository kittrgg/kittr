// This ts-ignore is for the actual running of this seed script.
// You should still be able to use faker types in VSCode.
// @ts-ignore
import faker from "@faker-js/faker"
import { getRandomValueFromArray } from "../../src/utils/randomFromArray"

export const createTrialDays = (trialIds: string[]) => {
	const trialDays = [...Array(4)].map(() => ({
		trialId: getRandomValueFromArray(trialIds),
		date: faker.date.soon(),
		akcId: faker.datatype.uuid(),
		entryLimit: Math.floor(Math.random() * 5),
		mixedBreeds: Math.random() > 0.5
	}))

	return trialDays
}
