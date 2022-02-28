import mongoose, { Schema } from "mongoose"

// This is the only place where channels are referred to as channels.
// The front-end calls these entities "channels."
// The back-end servers call these entities "channels."
// The database calls these entities "channels."
// This is because we don't feel like doing an entire migration just to change the name of a collection.
const MODEL_NAME = "player"

const schema = new Schema(
	{
		createdDate: Date,
		displayName: String,
		urlSafeName: String,
		viewCount: {
			type: Schema.Types.Number,
			default: 0
		},
		games: [],
		kits: [],
		meta: {
			brandColors: {
				primary: {
					type: String,
					default: "",
					optional: true
				}
			},
			hasCoverPhoto: {
				type: Boolean,
				default: false,
				optional: true
			},
			specs: {
				type: Object,
				default: {},
				optional: true
			},
			affiliates: {
				type: Object,
				default: {},
				optional: true
			},
			setupPhotos: {
				type: Object,
				default: {},
				optional: true
			},
			stripeId: {
				type: String,
				default: "",
				optional: true
			},
			premiumType: {
				type: String,
				default: "",
				optional: true
			},
			profileImage: String,
			hasProfileImage: {
				type: Schema.Types.Boolean,
				default: false
			},
			links: {
				type: Schema.Types.Mixed,
				default: {}
			},
			youtubeAutoplay: Boolean
		},
		managers: [],
		overlay: {},
		previousUpdater: String
	},
	{ minimize: false }
)

export const Channel =
	mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema)

export default Channel
