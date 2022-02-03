import mongoose, { Schema } from "mongoose"

const MODEL_NAME = "kitStat"

const schema = new Schema({
	ratioOfChannelsWithBaseFeatured: Schema.Types.Mixed,
	ratioOfChannelsWithBase: Schema.Types.Mixed,
	forSetupComparison: Schema.Types.Mixed
})

const KitStat = mongoose.model(MODEL_NAME, schema)

export default KitStat
