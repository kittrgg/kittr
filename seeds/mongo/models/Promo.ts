import mongoose, { Schema, Model } from "mongoose"

const MODEL_NAME = "promo"


const schema = new Schema({
	type: String,
	startTime: Number,
	endTime: Number,
	channelId: String
})

export const Promo =
	(mongoose.models[MODEL_NAME] ) || mongoose.model(MODEL_NAME, schema)

export default Promo
