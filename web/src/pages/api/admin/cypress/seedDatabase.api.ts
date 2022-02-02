import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { Channel } from "@Services/mongodb/models"
import mongoose from "mongoose"

import dummyChannelFixture from "@Utils/fixtures/mongoose/newChannel.json"
import tutorialChannel from "@Utils/fixtures/tutorial-channel.json"
import channelFixture from "@Utils/fixtures/mongoose/channel.json"
import premiumChannelFixture from "@Utils/fixtures/mongoose/premiumChannel.json"

const handler = createHandler()

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	if (process.env.ENABLE_SEEDING) {
		const rawChannel = channelFixture
		const rawPremiumChannel = premiumChannelFixture

		await Channel.deleteOne({ _id: channelFixture._id })
		await Channel.deleteOne({ _id: premiumChannelFixture._id })
		await Channel.deleteOne({ displayName: tutorialChannel.displayName })
		await Channel.deleteOne({ displayName: dummyChannelFixture.displayName })

		const prepped = {
			...rawChannel,
			_id: new mongoose.Types.ObjectId(rawChannel._id),
			games: rawChannel.games.map((game: any) => ({ ...game, id: new mongoose.Types.ObjectId(game.id) })),
			kits: rawChannel.kits.map((kit: any) => {
				return {
					...kit,
					_id: new mongoose.Types.ObjectId(kit._id),
					options: kit.options.map((opt: any) => new mongoose.Types.ObjectId(opt))
				}
			})
		}

		const preppedPremium = {
			...rawPremiumChannel,
			_id: new mongoose.Types.ObjectId(rawPremiumChannel._id),
			games: rawPremiumChannel.games.map((game: any) => ({ ...game, id: new mongoose.Types.ObjectId(game.id) })),
			kits: rawPremiumChannel.kits.map((kit: any) => {
				return {
					...kit,
					_id: new mongoose.Types.ObjectId(kit._id),
					options: kit.options.map((opt: any) => new mongoose.Types.ObjectId(opt))
				}
			})
		}

		Channel.insertMany([prepped, preppedPremium], {}, (err: any, data: any) => {
			if (err) {
				return res.status(500).json(err)
			}
			return res.status(200).json({ success: true })
		})
	} else {
		return res.status(500).json({ message: "Inappropriate environment" })
	}
})

export default handler
