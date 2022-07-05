const fs = require("fs")
const writeFile = fs.promises.writeFile
const { stringify } = require("envfile")
const inputs = require("./inputs/dev.env.json")

const main = async () => {
	const file = {}

	file.DATABASE_URL = inputs.DATABASE_URL
	file.MONGOOSE_CONNECTION_STRING = inputs.DB_CONNECTION_STRING
	await writeFile("./packages/prisma/.env", stringify(file))
}

main()
	.then(() => {
		console.log("Prisma env is set...")
		process.exit(0)
	})
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})

