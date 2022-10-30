const fs = require("fs")
const unlink = fs.promises.unlink

// TODO: This can be made to map over all the various packages and apps.
// Use the inputs.js and map over it just like dev.js does.
const main = async () => {
	await unlink("./packages/prisma/.env", () => null)
	await unlink("./apps/api/.env", () => null)
	await unlink("./apps/web/.env", () => null)
}

main()
	.then(() => {
		console.log("All environment files have been deleted.")
		process.exit(0)
	})
	.catch(() => {
		console.log("Looks like you are good to go!")
		process.exit(0)
	})
