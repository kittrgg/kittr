const fs = require("fs")
const writeFile = fs.promises.writeFile
const { stringify } = require("envfile")
const inputs = require("./inputs/localProd.env.json")

const main = async () => {
	const handleRoot = async () => {
		let rootFile = {}

		rootFile.POSTGRES_USER = inputs.POSTGRES_USER
		rootFile.POSTGRES_PASSWORD = inputs.POSTGRES_PASSWORD
		rootFile.POSTGRES_DB = inputs.POSTGRES_DB
		await writeFile("./.env", stringify(rootFile))
	}

	handleRoot()

	let file = {}

	file.DATABASE_URL = inputs.DATABASE_URL
	file.GOOGLE_MAPS_API_KEY = inputs.GOOGLE_MAPS_API_KEY
	file.IS_DEV = inputs.IS_DEV
	file.POSTMARK_API_KEY = inputs.POSTMARK_API_KEY
	file.SENTRY_DSN = inputs.SENTRY_DSN || ""
	file.STRIPE_PUBLISHABLE_KEY = inputs.STRIPE_PUBLISHABLE_KEY
	file.STRIPE_SECRET_KEY = inputs.STRIPE_SECRET_KEY
	await writeFile("./apps/api/.env", stringify(file))

	// Add more for Nextjs
	file.NEXT_PUBLIC_IS_DEV = inputs.NEXT_PUBLIC_IS_DEV
	file.NEXT_PUBLIC_API_PATH = inputs.NEXT_PUBLIC_API_PATH
	file.NEXT_PUBLIC_SENTRY_DSN = inputs.SENTRY_DSN || ""
	file.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY =
		inputs.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
	await writeFile("./apps/web/.env", stringify(file))
}

main()
	.then(() => {
		console.log("See developer deploy.")
		console.log("You may now run `yarn db-push`. After that, run `yarn dx`.")
	})
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
