import { ObjectSchema } from "@cypress/schema-tools"

export const kitOption: ObjectSchema = {
	version: {
		major: 1,
		minor: 0,
		patch: 0
	},
	schema: {
		title: "Kit Option",
		type: "object",
		properties: {
			orderPlacement: {
				type: "string"
			},
			optionId: {
				type: "string"
			},
			displayName: {
				type: "string"
			},
			slotKey: {
				type: "string"
			}
		},
		additionalProperties: false
	},
	example: {}
}
