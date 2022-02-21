// This ts-ignore is for the actual running of this seed script.
// You should still be able to use faker types in VSCode.
// @ts-ignore
import { PrismaClient } from "@prisma/client"
import { clubs } from "./seeds/clubs"
import { dogs } from "./seeds/dogs"
import { createRings } from "./seeds/rings"
import { createTrialDays } from "./seeds/trialDays"
import { createTrials } from "./seeds/trials"
import { users } from "./seeds/users"
const prisma = new PrismaClient()

const generateEntitySeedWithForeignKeys = (
	records: any,
	entityCreator: any
): [] => {
	const ids = records.map((record: any) => record.id)
	return entityCreator(ids)
}

const main = async () => {
	users.forEach(async (item) => {
		await prisma.user.create({
			data: item
		})
	})

	dogs.forEach(async (item) => {
		await prisma.dog.create({
			data: item
		})
	})

	clubs.forEach(async (item) => {
		await prisma.club.create({
			data: item
		})
	})

	const trials = generateEntitySeedWithForeignKeys(
		await prisma.club.findMany(),
		createTrials
	)
	trials.forEach(async (item) => {
		await prisma.trial.create({
			data: item
		})
	})

	const trialDays = generateEntitySeedWithForeignKeys(
		await prisma.trial.findMany(),
		createTrialDays
	)
	trialDays.forEach(async (item) => {
		await prisma.trialDay.create({
			data: item
		})
	})

	// const rings = generateEntitySeedWithForeignKeys(await prisma.trialDay.findMany(), createRings)
	// rings.forEach(async (item) => {
	// 	await prisma.ring.create({
	// 		data: item
	// 	})
	// })
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
