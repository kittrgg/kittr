import { prisma } from "../index"
import mongoose from "mongoose"

mongoose
	.connect(process.env.MONGOOSE_CONNECTION_STRING as string, {
		authSource: "admin"
	})
	.then(async () => {
		const main = async () => {
			await prisma.kitOption.deleteMany()
			await prisma.platform.deleteMany()
			await prisma.game.deleteMany()
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
