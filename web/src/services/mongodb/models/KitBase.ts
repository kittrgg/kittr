import mongoose, { Schema } from "mongoose"

const MODEL_NAME = "kitBase"

const schema = new Schema({
	displayName: String,
	gameId: mongoose.Types.ObjectId,
	image: String,
	gameInfo: {},
	commandCodes: [],
	category: String
})

export const KitBase = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema)

export default KitBase
