import { prisma } from "../index"
import mongoose from "mongoose"

import { KitOption } from "../models/KitOption"

mongoose
	.connect(process.env.MONGOOSE_CONNECTION_STRING as string, {
		authSource: "admin"
	})
	.then(async () => {
		const options = await KitOption.find({})

		const formattedOptions = options.map((option) => ({
			id: option._id.toString(),
			gameId: option.gameId,
			displayName: option.displayName,
			slotKey: option.slotKey
		}))

		const main = async () => {
			await prisma.kitOption.createMany({ data: formattedOptions })
		}

		main()
			.catch((e) => {
				console.error(e)
				process.exit(1)
			})
			.finally(async () => {
				await prisma.$disconnect()
			})

		mongoose.connection.close()
	})
