// This ts-ignore is for the actual running of this seed script.
// You should still be able to use faker types in VSCode.
// @ts-ignore
import faker from "@faker-js/faker"
import { AcceptanceMethod } from "@prisma/client"
import { getRandomValueFromArray } from "../../src/utils/randomFromArray"
import { users } from "../seeds/users"

export const createTrials = (clubIds: string[]) => {
	const trials = [...Array(2)].map(() => ({
		hostingClubId: getRandomValueFromArray(clubIds),
		akcEventNumber: faker.datatype.uuid(),
		venue: faker.address.cardinalDirection() + "" + faker.address.streetName() + "Park",
		venueStreetAddress: faker.address.streetAddress(),
		venueCity: faker.address.city(),
		venueState: faker.address.stateAbbr(),
		venuePostalCode: faker.address.zipCode(),
		type: getRandomValueFromArray(["Outdoor on Grass", "Indoor on Turf", "Indoor on Grass"]),
		signUpOpenDatetime: faker.date.recent(),
		signUpCloseDateTime: faker.date.soon(),
		acceptanceMethod: getRandomValueFromArray<AcceptanceMethod>(["RANDOMDRAW", "FIRSTRECEIVED"]),
		checksPayableTo: faker.company.companyName(),
		secretaryId: getRandomValueFromArray(users.map((user) => user.id)),
		trialChairmanName: faker.name.firstName() + " " + faker.name.lastName(),
		trialChairmanEmail: faker.internet.exampleEmail(),
		trialChairmanStreetAddress: faker.address.streetAddress(),
		trialChairmanCity: faker.address.city(),
		trialChairmanState: faker.address.stateAbbr(),
		trialChairmanPostalCode: faker.address.zipCode(),
		costFirstEntry: Number(faker.finance.amount(14, 27, 0)),
		costSecondEntry: Number(faker.finance.amount(14, 27, 0)),
		costThirdEntry: Number(faker.finance.amount(14, 27, 0)),
		costFourthEntry: Number(faker.finance.amount(14, 27, 0)),
		catalogFee: Number(faker.finance.amount(4, 8, 0)),
		confirmationLetter: "Hey, you're signed up!"
	}))

	return trials
}
