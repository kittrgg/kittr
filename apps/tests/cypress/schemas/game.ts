import { ObjectSchema } from "@cypress/schema-tools"

export const game: ObjectSchema = {
	version: {
		major: 1,
		minor: 0,
		patch: 0
	},
	schema: {
		title: "Game",
		type: "object",
		properties: {
			active: {
				type: "boolean"
			},
			backgroundImage: {
				type: "string"
			},
			blurDataURL: {
				type: "string"
			},
			developer: {
				type: "string"
			},
			displayName: {
				type: "string"
			},
			genres: {
				type: "array",
				items: {
					type: "string"
				}
			},
			meta: {
				type: "object"
			},
			platforms: {
				type: "array",
				items: {
					type: "string"
				}
			},
			releaseDate: {
				type: "string"
			},
			titleImage: {
				type: "string"
			},
			urlSafeName: {
				type: "string"
			},
			__v: {
				type: "number"
			},
			_id: {
				type: "string"
			}
		},
		additionalProperties: false
	},
	example: {}
}
