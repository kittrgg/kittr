import faker from "@faker-js/faker"
import supertest from "supertest"
import app from "@Root/server"
import { prisma } from "@Libs/prisma"
import { buildDog } from "@Root/../.jest/dogGenerator"

describe("Dogs routes", () => {
	faker.seed(123)

	const dogToSave = buildDog({ callName: "Fido" })

	const removeData = async () => {
		await prisma.dog.delete({ where: { id: dogToSave.id } })
	}

	beforeEach(async () => {
		try {
			await removeData()
		} catch {}
	})

	afterAll(async () => {
		try {
			await removeData()
		} catch {}
	})

	describe("GET /", () => {
		it("should return 404 when no dog found", async () => {
			const response = await supertest(app).get("/v1/dogs/notadog")
			expect(response.status).toEqual(404)
			expect(response.body).toHaveProperty("error", "Dog not found")
		})

		// 	it("should return dog when found", async () => {
		// 		const response = await supertest(app).get("/v1/dogs/123")
		// 		expect(response.status).toEqual(200)
		// 		expect(response.body).toHaveProperty("callName", "Fido")
		// 	})
		// })

		// describe("POST /", () => {
		// 	it("throws error with no payload", async () => {
		// 		const response = await supertest(app).post("/v1/dogs")
		// 		expect(response.status).toEqual(400)
		// 		expect(response.body).toHaveProperty(
		// 			"error",
		// 			"Your dog is shaped funny. Check the schema of your dog payload."
		// 		)
		// 	})

		it("throws with malformed body", async () => {
			const response = await supertest(app)
				.post("/v1/dogs")
				.send({ iAm: "not a dog schema" })
			expect(response.status).toEqual(400)
			expect(response.body).toHaveProperty(
				"error",
				"Your dog is shaped funny. Check the schema of your dog payload."
			)
		})

		it("place dog in database", async () => {
			const dog = buildDog()

			const response = await supertest(app).post("/v1/dogs").send(dog)
			console.log(response.body.errorInfo)
			expect(response.status).toEqual(200)
			expect(response.body).toEqual({
				...dog,
				birthdate: dog.birthdate?.toISOString()
			})
		})
	})
})
