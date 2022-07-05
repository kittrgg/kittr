const fs = require("fs")
const unlink = fs.promises.unlink

const main = async () => {
	// The way things are currently setup, this script is running while in ./packages/prisma.
	// That means it can just stare at it's root.
	await unlink("./.env", () => null)
}

main()
	.then(() => {
		console.log("Prisma .env has been cleared.")
		process.exit(0)
	})
	.catch((err) => {
		console.log("Looks like you are good to go!")
		process.exit(0)
	})
