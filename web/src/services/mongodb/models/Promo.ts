import mongoose, { Schema, Model } from "mongoose"

const MODEL_NAME = "promo"

export interface PromoModel {
	type: string
	startTime: number
	endTime: number
	channelId: string
}

const schema = new Schema({
	type: String,
	startTime: Number,
	endTime: Number,
	channelId: String
})

export const Promo =
	(mongoose.models[MODEL_NAME] as Model<PromoModel, {}, {}, {}>) || mongoose.model<PromoModel>(MODEL_NAME, schema)

export default Promo
