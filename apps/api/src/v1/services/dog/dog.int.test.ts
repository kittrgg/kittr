// TODO: Absolute import
import { buildDog } from "@Root/../.jest/dogGenerator"
import DogService from "./index"
import { prisma } from "@Libs/prisma"
import faker from "@faker-js/faker"

const dogService = new DogService()

describe("Dog Services (INT)", () => {
	faker.seed(123)

	const dog1 = buildDog({ id: faker.datatype.uuid(), callName: "BBB" })
	const dog2 = buildDog({ id: faker.datatype.uuid(), callName: "AAA", sex: "FEMALE" })
	const dog3 = buildDog({ id: faker.datatype.uuid(), callName: "DDD", sex: "FEMALE" })
	const dog4 = buildDog({ id: faker.datatype.uuid(), callName: "CCC" })

	const createdDog = buildDog()
	const createdDogWithoutBirthdate = buildDog({ birthdate: null })

	const dogToUpdate = dog1
	const { id: dogId } = dog1

	const removeData = async () => {
		await prisma.dog.delete({ where: { id: createdDog.id } })
		await prisma.dog.delete({ where: { id: createdDogWithoutBirthdate.id } })
	}

	beforeEach(async () => {
		const deleted = await prisma.dog.deleteMany({
			where: { id: { in: [dog1.id, dog2.id, dog3.id, dog4.id] } }
		})

		let deletedCreated = false

		try {
			await removeData()
			deletedCreated = true
		} catch {
			deletedCreated = true
		}

		if (deleted && deletedCreated) {
			await prisma.dog.createMany({ data: [dog1, dog2, dog3, dog4] })
		}
	})

	afterAll(async () => {
		await removeData()
	})

	describe("v1", () => {
		describe("get", () => {
			it("get a dog", async () => {
				const dogResult = await dogService.get({ dogId: dogId })
				expect(dogResult).toEqual(dog1)
			})

			it("throws with no dogId", async () => {
				expect(dogService.get).rejects.toThrow("Dog ID is required")
			})

			it("throws when no dog found", async () => {
				expect(async () => await dogService.get({ dogId: "123" })).rejects.toThrow("Dog not found")
			})
		})

		describe("list", () => {
			it("list only female dogs", async () => {
				const listResult = await dogService.list({ where: { sex: "FEMALE" }, skip: 0, take: 10 })
				expect(listResult).toEqual(expect.arrayContaining([dog2, dog3]))
			})

			it("sort dogs by call name", async () => {
				const listResult = await dogService.list({ where: {}, skip: 0, take: 10, orderBy: { callName: "asc" } })

				// Filter to only test dogs
				const filteredResult = listResult.filter(
					(dog) => dog.id === dog1.id || dog.id === dog2.id || dog.id === dog3.id || dog.id === dog4.id
				)

				// Pare down to just the call names for comparison
				const resultCallNames = filteredResult.map((dog) => dog.callName)
				const testCallNames = [dog1, dog2, dog3, dog4].map((dog) => dog.callName).sort()

				expect(resultCallNames).toEqual(testCallNames)
			})
		})

		describe("create", () => {
			it("a dog", async () => {
				const result = await dogService.create(createdDog)
				expect(result).toEqual(createdDog)
			})

			it("a dog without a birthdate", async () => {
				const result = await dogService.create(createdDogWithoutBirthdate)
				expect(result).toEqual(createdDogWithoutBirthdate)
			})
		})

		describe("delete", () => {
			it("a dog", async () => {
				await dogService.delete({ dogId })
				expect(async () => await dogService.get({ dogId })).rejects.toThrow("Dog not found")
			})
		})

		describe("update", () => {
			it("a dog", async () => {
				await dogService.update({ ...dogToUpdate, callName: "ZZZ" })
				const result = await dogService.get({ dogId: dogToUpdate.id })
				expect(result).toHaveProperty("callName", "ZZZ")
			})

			it("throws with no id", async () => {
				expect(dogService.update).rejects.toThrow("Dog ID is required")
			})
		})
	})
})
