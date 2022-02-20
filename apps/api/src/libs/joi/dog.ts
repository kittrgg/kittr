import joi from "joi"

export const dogSchema = joi.object().keys({
	id: joi.string().guid().required(),
	callName: joi.string().required(),
	akcBreed: joi.string().required(),
	sex: joi.string().valid("FEMALE", "MALE").insensitive().required(),
	birthdate: joi.date().iso().less("now"),
	birthplace: joi.string(),
	akcRegisteredName: joi.string(),
	akcTitlePrefix: joi.string(),
	akcTitleSuffix: joi.string(),
	akcRegistrationType: joi.string().allow(null),
	akcHeightCard: joi.string().valid("TEMP", "PERM", "NONE").insensitive().required(),
	akcMeasuredHeight: joi.number(),
	registrationNumber: joi.string(),
	breederName: joi.string(),
	sireName: joi.string(),
	damName: joi.string(),
	primaryOwnerId: joi.string().guid().required(),
	handler: joi.string().allow(null),
	isOfficiallyMeasured: joi.boolean().required(),
	jumpHeight: joi.number(),
	preferredClasses: joi.boolean()
})
