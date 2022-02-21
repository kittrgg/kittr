// This ts-ignore is for the actual running of this seed script.
// You should still be able to use faker types in VSCode.
// @ts-ignore
import faker from "@faker-js/faker"

export const clubs = [...Array(3)].map(() => ({
	name: faker.name.lastName() + "'s " + faker.company.companyName() + " Club"
}))
