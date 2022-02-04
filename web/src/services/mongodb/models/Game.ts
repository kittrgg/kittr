import mongoose, { Schema, Model } from "mongoose"

const MODEL_NAME = "game"

export interface GameModel {
	displayName: string
	urlSafeName: string
	backgroundImage: string
	titleImage: string
	active: boolean
	meta: {
		creatorCode: string
	}
}

const schema = new Schema<GameModel>(
	{
		displayName: String,
		urlSafeName: String,
		backgroundImage: String,
		titleImage: String,
		active: {
			type: Boolean,
			default: false
		},
		meta: {
			creatorCode: String
		}
	},
	{ minimize: false }
)

export const Game =
	(mongoose.models[MODEL_NAME] as Model<GameModel, {}, {}, {}>) || mongoose.model<GameModel>(MODEL_NAME, schema)

export default Game
