import { ObjectSchema } from "@cypress/schema-tools"

export const channel: ObjectSchema = {
	version: {
		major: 1,
		minor: 0,
		patch: 0
	},
	schema: {
		title: "Channel",
		type: "object",
		properties: {
			createdDate: {
				type: "string"
			},
			dipsplayName: {
				type: "string"
			},
			games: {
				type: "array",
				items: {
					type: "object",
					properties: {
						code: {
							type: "string"
						},
						commandString: {
							type: "string"
						},
						id: {
							type: "string"
						}
					}
				}
			},
			kits: {
				type: "array",
				items: {
					type: "object",
					properties: {
						baseId: {
							type: "string"
						},
						options: {
							type: "array",
							items: {
								type: "string"
							}
						},
						userData: {
							type: "object",
							properties: {
								blueprint: {
									type: "string"
								},
								customTitle: {
									type: "string"
								},
								featured: {
									type: "boolean"
								},
								youtubeUrl: {
									type: "string"
								}
							}
						},
						_id: {
							type: "string"
						}
					}
				}
			},
			managers: {
				type: "array",
				items: {
					type: "object",
					properties: {
						role: {
							type: "string"
						},
						uid: {
							type: "string"
						}
					}
				}
			},
			meta: {
				type: "object",
				properties: {
					hasProfileImage: {
						type: "boolean"
					},
					profileImage: {
						type: "string"
					},
					youtubeAutoplay: {
						type: "boolean"
					},
					links: {
						type: "object",
						properties: {
							discord: {
								type: "string",
								required: false
							},
							instagram: {
								type: "string",
								required: false
							},
							tiktok: {
								type: "string",
								required: false
							},
							twitch: {
								type: "string",
								required: false
							},
							twitter: {
								type: "string",
								required: false
							},
							youtube: {
								type: "string",
								required: false
							}
						}
					}
				}
			},
			displayName: {
				type: "string"
			},
			previousUpdater: {
				type: "string"
			},
			urlSafeName: {
				type: "string"
			},
			viewCount: {
				type: "number"
			},
			__v: {
				type: "number"
			},
			_id: {
				type: "string"
			},
			role: {
				type: "array",
				items: {
					type: "object",
					properties: {
						role: {
							type: "string"
						},
						uid: {
							type: "string"
						}
					}
				},
				required: false
			}
		},
		additionalProperties: false
	},
	example: {}
}
