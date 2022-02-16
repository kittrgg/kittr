import mongoose, { Schema, Model } from "mongoose"

const MODEL_NAME = "kitOption"


const schema = new Schema({
	gameId: String,
	displayName: String,
	slotKey: String
})

export const KitOption =
	(mongoose.models[MODEL_NAME]  ||
	mongoose.model(MODEL_NAME, schema))

export default KitOption
