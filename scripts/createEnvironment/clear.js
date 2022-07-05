const fs = require("fs")
const unlink = fs.promises.unlink

const main = async () => {
	await unlink("./packages/prisma/.env", () => null)
	await unlink("./apps/api/.env", () => null)
	await unlink("./apps/api/.env.development", () => null)
	await unlink("./apps/web/.env", () => null)
}

main()
	.then(() => {
		console.log("All environment files have been deleted.")
		process.exit(0)
	})
	.catch((err) => {
		console.log("Looks like you are good to go!")
		process.exit(0)
	})
