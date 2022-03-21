import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"
import Game, { GameModel } from "@Services/orm/models/Game"

const handler = createHandler(adminAuth)

// Create a game
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<GameModel>>) => {
	const newGame = new Game(req.body)

	try {
		const game = await newGame.save()
		return res.status(200).json(game)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

//Edit a game
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<GameModel | null>>) => {
	const { _id, displayName, backgroundImage, titleImage } = req.body

	try {
		const game = await Game.findOneAndUpdate(
			{ _id: new mongoose.Types.ObjectId(_id) },
			{ $set: { displayName, backgroundImage, titleImage } },
			{ new: true }
		)

		return res.status(200).json(game)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
