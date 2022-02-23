import mongoose, { Schema, Model } from "mongoose"

const MODEL_NAME = "kitOption"

export interface KitOptionModel {
	gameId: string
	displayName: string
	slotKey: string
}

const schema = new Schema({
	gameId: String,
	displayName: String,
	slotKey: String
})

export const KitOption =
	(mongoose.models[MODEL_NAME] as Model<KitOptionModel, {}, {}, {}>) ||
	mongoose.model<KitOptionModel>(MODEL_NAME, schema)

export default KitOption
