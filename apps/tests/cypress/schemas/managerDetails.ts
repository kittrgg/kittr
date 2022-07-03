import { ObjectSchema } from "@cypress/schema-tools"

export const managerDetails: ObjectSchema = {
	version: {
		major: 1,
		minor: 0,
		patch: 0
	},
	schema: {
		title: "Manager Details",
		type: "object",
		properties: {
			displayName: {
				type: "string"
			},
			email: {
				type: "string"
			},
			uid: {
				type: "string"
			}
		},
		additionalProperties: false
	},
	example: {}
}
