import { ObjectSchema } from "@cypress/schema-tools"

export const addManagerError: ObjectSchema = {
	version: {
		major: 1,
		minor: 0,
		patch: 0
	},
	schema: {
		title: "Add Manager Error",
		type: "object",
		properties: {
			error: {
				type: "boolean"
			},
			message: {
				type: "string"
			}
		},
		additionalProperties: false
	},
	example: {}
}
