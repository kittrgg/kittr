import { dogSchema } from "@Libs/joi/dog"
import { prisma } from "@Libs/prisma"
import { Dog, DogSex } from "@prisma/client"
import CrudInterface, { ListParams } from "@Utils/crudInterface"
import { ResponseError } from "@Utils/errorHandlers"

// Things you do in a service:
// Query your database
// Authentication logic
// Communicate with other services (i.e. Use the AKC API)
// Any other business logic (i.e. converting currencies, pick colors of flowers, etc.)

export default class DogService implements CrudInterface<Dog> {
	async get(params: { dogId: string }): Promise<Dog | null> {
		if (!params?.dogId) throw new ResponseError("Dog ID is required", { statusCode: 400 })
		const { dogId } = params

		const dog = await prisma.dog.findUnique({ where: { id: dogId } })
		if (!dog) throw new ResponseError("Dog not found", { statusCode: 404 })
		return dog
	}

	async list({ where, skip, take, orderBy }: ListParams<Dog>): Promise<Dog[]> {
		const { sex, ...rest } = where
		const newWhere = { sex: sex?.toUpperCase() as DogSex, ...rest }
		return await prisma.dog.findMany({ where: newWhere, skip, take, orderBy })
	}

	async create(dog: Dog): Promise<Dog> {
		const { error, value } = dogSchema.validate(dog)
		if (error) {
			throw new ResponseError("Your dog is shaped funny. Check the schema of your dog payload.", {
				statusCode: 400,
				info: error
			})
		}

		value.birthdate = dog.birthdate ? new Date(dog.birthdate) : null

		return await prisma.dog.create({
			data: { ...dog, birthdate: value.birthdate }
		})
	}

	async delete(params: { dogId: string }): Promise<Dog | null> {
		return await prisma.dog.delete({ where: { id: params.dogId } })
	}

	async update(params: Dog): Promise<Dog | null> {
		if (!params?.id) throw new ResponseError("Dog ID is required", { statusCode: 400 })
		const { id, ...dog } = params
		return await prisma.dog.update({ where: { id }, data: dog })
	}
}
