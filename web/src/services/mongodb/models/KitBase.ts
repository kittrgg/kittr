import mongoose, { Schema, Model, Types } from "mongoose"

const MODEL_NAME = "kitBase"

export interface KitBaseModel {
	displayName: String
	gameId: Types.ObjectId
	image: string
	gameInfo: {
		blurb: string
		stats: {
			accuracy: number
			range: number
			mobility: number
			damage: number
			fireRate: number
			control: number
		}
		availableOptions: Array<{ orderPlacement: string; optionId: Types.ObjectId }>
		maxOptions: number
	}
	commandCodes: Array<string>
	category: string
}

const schema = new Schema({
	displayName: String,
	gameId: mongoose.Types.ObjectId,
	image: String,
	gameInfo: {},
	commandCodes: [],
	category: String
})

export const KitBase =
	(mongoose.models[MODEL_NAME] as Model<KitBaseModel, {}, {}, {}>) || mongoose.model<KitBaseModel>(MODEL_NAME, schema)

export default KitBase
