import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"
import { Game } from "@Services/mongodb/models"

const handler = createHandler(adminAuth)

// Create a game
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const newGame = await new Game(req.body)

	await newGame.save((errors: any, data: Array<IGame>) => {
		if (errors) return res.status(400).json(errors)
		return res.status(200).json(data)
	})
})

//Edit a game
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
	const { _id, displayName, backgroundImage, titleImage } = req.body

	Game.findOneAndUpdate(
		{ _id: new mongoose.Types.ObjectId(_id) },
		{ $set: { displayName, backgroundImage, titleImage } },
		{ new: true },
		(errors, data: IGame) => {
			if (errors) return res.status(400).json(errors)
			return res.status(200).json(data)
		}
	)
})

export default handler
