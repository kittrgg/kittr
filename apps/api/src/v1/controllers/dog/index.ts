import { dogSchema } from "@Libs/joi/dog"
import { Dog, DogSex } from "@prisma/client"
import { ResponseError } from "@Utils/errorHandlers"
import { setPagerDefaults } from "@Utils/setPagerDefaults"
import { RequestHandler } from "express"
import DogService from "../../services/dog/index"

// Things you would do in a controller:
// Create response payloads (for instance, getting rid of unnecessary values)
// Setting response statuses
// Returning error codes
// Validate request structures (i.e. make sure the request parameters are correct)

const dogService = new DogService()

const getDog: RequestHandler = async (req, res, next) => {
	const { dogId } = req.params
	const dog = await dogService.get({ dogId })
	return res.status(200).json(dog)
}

const listDogs: RequestHandler<{}, any, any, { skip?: string; take?: string; sex: DogSex }> = async (
	req,
	res,
	next
) => {
	const { skip, take, ...where } = setPagerDefaults(req.query, 0, 10)

	const dogs = await dogService.list({ where, skip, take })
	return res.status(200).json(dogs)
}

const createNewDog: RequestHandler = async (req, res, next) => {
	const dogs = await dogService.create(req.body)
	return res.status(200).json(dogs)
}

const deleteDog: RequestHandler = async (req, res, next) => {
	const { dogId } = req.params

	const dog = await dogService.delete({ dogId })
	if (dog) {
		return res.status(200).json(dog)
	}

	// Should be moved to service
	throw new ResponseError("Dog not found", { statusCode: 404 })
}

const updateDog: RequestHandler<{}, Dog, any, any> = async (req, res, next) => {
	const dog = req.body

	const result = await dogService.update(dog)
	if (result) {
		return res.status(200).json(result)
	}

	throw new ResponseError("Dog not found", { statusCode: 404 })
}

export default {
	getDog,
	listDogs,
	createNewDog,
	deleteDog,
	updateDog
}
