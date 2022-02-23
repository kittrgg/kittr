import mongoose, { Schema } from "mongoose"

const MODEL_NAME = "kitOption"

const schema = new Schema({
	gameId: String,
	displayName: String,
	slotKey: String
})

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema)

export default Model
