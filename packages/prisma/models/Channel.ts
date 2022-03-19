import mongoose, { Schema, Types, Model } from "mongoose"
import { IKit } from "@kittr/types/kits"

// This is the only place where channels are referred to as channels.
// The front-end calls these entities "channels."
// The back-end servers call these entities "channels."
// The database calls these entities "channels."
// This is because we don't feel like doing an entire migration just to change the name of a collection.
const MODEL_NAME = "player"

export interface ChannelModel {
	createdDate: Date | string
	displayName: string
	urlSafeName: string
	viewCount: number
	games: Array<{
		id: string
		code?: string
		commandString?: string
	}>
	kits: Array<{
		_id: Types.ObjectId
		baseId: string
		options: Array<Types.ObjectId>
		userData: {
			customTitle?: string
			blueprint?: string
			featured?: boolean
			youtubeURL?: string
			tiktokId?: string
			quote?: string
		}
	}>
	meta: {
		brandColors: {
			primary: string
		}
		hasCoverPhoto: boolean
		specs: {
			[key: string]: string
		}
		affiliates: {
			[key: string]: {
				code?: string
				description?: string
				company?: string
				url?: string
			}
		}
		setupPhotos: {
			[key: string]: string
		}
		stripeId: string
		premiumType: string
		profileImage: string
		hasProfileImage: boolean
		links: {
			twitch: string
			youtube: string
			instagram: string
			twitter: string
			facebook: string
			discord: string
			tiktok: string
		}
		youtubeAutoplay: boolean
	}
	managers: Array<{ uid: string; role: "Owner" | "Administrator" | "Editor" }>
	overlay: {
		displayName: string
		textColorAccent: string
		backgroundColorSecondary: string
		textColorSecondary: string
		backgroundColorPrimary: string
		textColorPrimary: string
		isOverlayVisible: "on" | "off"
		primaryKit: IKit
		secondaryKit: IKit
	}
	previousUpdater: string
	__v: number
}

const schema = new Schema<ChannelModel>(
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
	(mongoose.models[MODEL_NAME] as Model<ChannelModel, {}, {}, {}>) ||
	mongoose.model(MODEL_NAME, schema)

export default Channel
