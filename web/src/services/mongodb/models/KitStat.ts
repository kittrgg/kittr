import mongoose, { Schema, Model } from "mongoose"

const MODEL_NAME = "kitStat"

export interface KitStatModel {
	ratioOfChannelsWithBaseFeatured: Array<{
		_id: string
		baseCount: number
		channelCount: number
		ratio: number
	}>
	ratioOfChannelsWithBase: Array<{
		_id: string
		baseCount: number
		channelCount: number
		ratio: number
	}>
	forSetupComparison: Array<{
		_id: string
		matches: Array<Array<string>>
	}>
}

const schema = new Schema({
	ratioOfChannelsWithBaseFeatured: Schema.Types.Mixed,
	ratioOfChannelsWithBase: Schema.Types.Mixed,
	forSetupComparison: Schema.Types.Mixed
})

export const KitStat =
	(mongoose.models[MODEL_NAME] as Model<KitStatModel, {}, {}, {}>) || mongoose.model<KitStatModel>(MODEL_NAME, schema)

export default KitStat
