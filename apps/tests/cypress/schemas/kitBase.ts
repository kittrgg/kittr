import { ObjectSchema } from "@cypress/schema-tools"

export const kitBase: ObjectSchema = {
	version: {
		major: 1,
		minor: 0,
		patch: 0
	},
	schema: {
		title: "Kit Base",
		type: "object",
		properties: {
			__v: {
				type: "number"
			},
			_id: {
				type: "string"
			},
			category: {
				type: "string"
			},
			commandCodes: {
				type: "array",
				items: {
					type: "string"
				}
			},
			displayName: {
				type: "string"
			},
			gameId: {
				type: "string"
			},
			gameInfo: {
				type: "object",
				properties: {
					availableOptions: {
						type: "array",
						items: {
							type: "object",
							properties: {
								optionId: {
									type: "string"
								},
								orderPlacement: {
									type: "string"
								}
							}
						}
					},
					blurb: {
						type: "string"
					},
					stats: {
						type: "object",
						properties: {
							accuracy: {
								type: "number"
							},
							control: {
								type: "number"
							},
							damage: {
								type: "number"
							},
							fireRate: {
								type: "number"
							},
							mobility: {
								type: "number"
							},
							range: {
								type: "number"
							}
						}
					}
				}
			},
			image: {
				type: "string"
			}
		},
		additionalProperties: false
	},
	example: {}
}
