// This ts-ignore is for the actual running of this seed script.
// You should still be able to use faker types in VSCode.
// @ts-ignore
import faker from "@faker-js/faker"
import { State } from "@prisma/client"

export const users = [...Array(5)].map(() => ({
	id: faker.datatype.uuid(),
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	streetAddress: faker.address.streetAddress(),
	city: faker.address.city(),
	state: faker.address.stateAbbr() as State,
	postalCode: faker.address.zipCode(),
	phone: faker.phone.phoneNumber(),
	email: faker.internet.email()
}))
