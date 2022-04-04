import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { prisma } from "@kittr/prisma"

import dummyChannelFixture from "@Utils/fixtures/mongoose/newChannel.json"
import tutorialChannel from "@Utils/fixtures/tutorial-channel.json"
import channelFixture from "@Utils/fixtures/mongoose/channel.json"
import premiumChannelFixture from "@Utils/fixtures/mongoose/premiumChannel.json"

const handler = createHandler()
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	if (process.env.NEXT_PUBLIC_ENABLE_SEEDING) {
		console.log("Seeding database...")
		const rawChannel = channelFixture
		const rawPremiumChannel = premiumChannelFixture

		try {
			await prisma.channel.delete({
				where: { id: channelFixture.id }
			})
			await prisma.channel.delete({
				where: { id: premiumChannelFixture.id }
			})

			await prisma.channel.delete({
				where: { displayName: tutorialChannel.displayName }
			})

			await prisma.channel.delete({
				where: { displayName: dummyChannelFixture.displayName }
			})
		} catch (error) {
			console.error("Error while deleting channels: ", error)
		}

		await prisma.channel.createMany({
			data: [rawChannel, rawPremiumChannel]
		})
	} else {
		return res.status(500).json({ message: "Inappropriate environment" })
	}
})

export default handler
