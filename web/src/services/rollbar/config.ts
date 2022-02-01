export let config = {
	accessToken: process.env.NEXT_PUBLIC_ROLLBAR_ACCESS_TOKEN,
	environment: process.env.NEXT_PUBLIC_ROLLBAR_ENVIRONMENT,
	captureUncaught: true,
	captureUnhandledRejections: true,
	// This is for making sure that we only get errors
	// that come from our client.
	// In particular, this helps to ignore third-party ad errors.
	hostSafeList: ["kittr.gg"],
	ignoredMessages: ["Failed to load Stripe.js"]
}

if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
	config = {
		accessToken: "",
		environment: "",
		captureUncaught: false,
		captureUnhandledRejections: false,
		hostSafeList: ["kittr.gg"],
		ignoredMessages: [
			"Failed to load Stripe.js",
			'Blocked a frame with origin "https://www.kittr.gg" from accessing a cross-origin frame. Protocols, domains, and ports must match.'
		]
	}
}

export default config
