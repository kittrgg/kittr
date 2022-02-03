import mongoose, { Schema } from "mongoose"

const MODEL_NAME = "kitOption"

const schema = new Schema({
	gameId: String,
	displayName: String,
	slotKey: String
})

const KitOption = mongoose.model(MODEL_NAME, schema)

export default KitOption
