const fs = require("fs")
const writeFile = fs.promises.writeFile
const { stringify } = require("envfile")
const inputs = require("./inputs/dev.env.json")

const main = async () => {
	// const handleRoot = async () => {
	// 	let rootFile = {}

	// 	rootFile.POSTGRES_USER = inputs.POSTGRES_USER
	// 	rootFile.POSTGRES_PASSWORD = inputs.POSTGRES_PASSWORD
	// 	rootFile.POSTGRES_DB = inputs.POSTGRES_DB
	// 	await writeFile("./.env", stringify(rootFile))
	// }

	// handleRoot()

	let file = {}

	file.DATABASE_URL = inputs.DATABASE_URL
	await writeFile("./packages/prisma/.env", stringify(file))

	file.DB_CONNECTION_STRING = inputs.DB_CONNECTION_STRING
	file.IS_DEV = inputs.IS_DEV
	file.FIREBASE_AUTH_EMULATOR_HOST = inputs.FIREBASE_AUTH_EMULATOR_HOST
	file.FIREBASE_STORAGE_EMULATOR_HOST = inputs.FIREBASE_STORAGE_EMULATOR_HOST
	file.TWITCH_CLIENT_ID = inputs.TWITCH_CLIENT_ID
	file.TWITCH_CLIENT_SECRET = inputs.TWITCH_CLIENT_SECRET
	file.TWITCH_SECRET = inputs.TWITCH_SECRET
	file.TWITCH_EXTENSION_SECRET = inputs.TWITCH_EXTENSION_SECRET
	file.SENTRY_DSN = inputs.SENTRY_DSN
	await writeFile("./apps/api/.env", stringify(file))
	await writeFile("./apps/api/.env.development", stringify(file))

	file.NEXT_PUBLIC_SENTRY_DSN = inputs.SENTRY_DSN
	file.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST =
		inputs.FIREBASE_AUTH_EMULATOR_HOST
	file.NEXT_PUBLIC_FIREBASE_STORAGE_EMULATOR_HOST =
		inputs.FIREBASE_STORAGE_EMULATOR_HOST
	file.NEXT_PUBLIC_SOCKET_HOST = inputs.SOCKET_HOST
	file.NEXT_PUBLIC_IS_DEV = inputs.IS_DEV
	file.STRIPE_WEBHOOK_SECRET = inputs.STRIPE_WEBHOOK_SECRET
	file.STRIPE_SECRET_KEY = inputs.STRIPE_SECRET_KEY
	file.STRIPE_PUBLISHABLE_KEY = inputs.STRIPE_PUBLISHABLE_KEY
	file.SUBSCRIPTION_PRICE_ID = inputs.SUBSCRIPTION_PRICE_ID
	file.MONTHLY_TIP_PRICE_ID = inputs.MONTHLY_TIP_PRICE_ID
	await writeFile("./apps/web/.env", stringify(file))
}

main()
	.then(() => {
		console.log("See developer develop.")
		console.log("You may now run `yarn db-push`. After that, run `yarn dx`.")
	})
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
