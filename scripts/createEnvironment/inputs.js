module.exports = {
	apps: {
		web: {
			DATABASE_URL: process.env.DATABASE_URL,
			NEXT_PUBLIC_SOCKET_HOST: process.env.NEXT_PUBLIC_SOCKET_HOST,
			NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
				process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
			STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
			SUBSCRIPTION_PRICE_ID: process.env.SUBSCRIPTION_PRICE_ID,
			TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
			TWITCH_SECRET: process.env.TWITCH_SECRET,
			ADS_DISABLED: process.env.ADS_DISABLED
		}
	},
	packages: {
		prisma: {
			DATABASE_URL: process.env.DATABASE_URL
		}
	}
}
