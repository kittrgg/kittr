// This ts-ignore is for the actual running of this seed script.
// You should still be able to use faker types in VSCode.
// @ts-ignore
import faker from "@faker-js/faker"
import { DogSex } from "@prisma/client"
import { users } from "./users"
import { getRandomValueFromArray } from "../../src/utils/randomFromArray"

export const dogs = [...Array(10)].map(() => ({
	callName: faker.name.firstName(),
	akcBreed: faker.animal.dog(),
	sex: "MALE" as DogSex,
	birthdate: faker.date.past(),
	birthplace: "USA",
	akcRegisteredName: faker.animal.dog.name,
	akcTitlePrefix: "AKC",
	akcTitleSuffix: "AKC",
	akcMeasuredHeight: Math.floor(Math.random()) * (24 - 12 + 1) + 12,
	registrationNumber: faker.datatype.uuid(),
	breederName: faker.name.firstName() + " " + faker.name.lastName(),
	sireName: faker.name.firstName(),
	damName: faker.name.firstName(),
	primaryOwnerId: getRandomValueFromArray(users.map((user) => user.id)),
	jumpHeight: Math.floor(Math.random()) * (24 - 12 + 1) + 12
}))
