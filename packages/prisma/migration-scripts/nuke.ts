import { prisma } from "../index"
import mongoose from "mongoose"

mongoose
	.connect(process.env.MONGOOSE_CONNECTION_STRING as string, {
		authSource: "admin"
	})
	.then(async () => {
		const main = async () => {
			await prisma.platform.deleteMany()
			await prisma.commandCode.deleteMany()
			await prisma.kitStat.deleteMany()
			await prisma.kitOption.deleteMany()
			await prisma.kitBaseCategory.deleteMany()
			await prisma.kitBase.deleteMany()
			await prisma.game.deleteMany()
		}

		main()
			.catch((e) => {
				console.error(e)
				process.exit(1)
			})
			.finally(async () => {
				await prisma.$disconnect()
				await mongoose.connection.close()
				console.log("DB is clear.")
			})
	})
