// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require("@kittr/logger/nextjs")

const moduleExports = {
	compiler: {
		styledComponents: true
	},
	poweredByHeader: false,
	pageExtensions: ["page.tsx", "api.ts"],
	async redirects() {
		return [
			// For Venatus
			{
				source: "/ads.txt",
				destination: "https://adstxt.venatusmedia.com/6124b025a3fb50273241cb6a_ads.txt",
				permanent: true
			},
			// For the "roster" pages
			{
				source: "/channels",
				destination: "/channels/1",
				permanent: true
			},
			{
				source: "/games/:game",
				destination: "/games/:game/1",
				permanent: true
			},
			{
				source: "/c/:player",
				destination: "/channel/:player",
				permanent: true
			},
			{
				source: "/c/:player/:game",
				destination: "/channel/:player/:game",
				permanent: true
			},
			// Legacy redirects for users who have not updated to the new pathing system
			{
				source: "/players/:player",
				destination: "/channel/:player",
				permanent: true
			},
			{
				source: "/players/:player/:game",
				destination: "/channel/:player/:game",
				permanent: true
			},
			{
				source: "/p/:player",
				destination: "/channel/:player",
				permanent: true
			},
			{
				source: "/p/:player/:game",
				destination: "/channel/:player/:game",
				permanent: true
			},
			{
				source: "/players/:player/:game/overlay",
				destination: "/channel/:player/:game/overlay",
				permanent: true
			},
		]
	},
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 800,
			aggregateTimeout: 300,
			ignored: /node_modules/
		}

		return config
	}
}

const sentryWebpackPluginOptions = {
	// Additional config options for the Sentry Webpack plugin. Keep in mind that
	// the following options are set automatically, and overriding them is not
	// recommended:
	//   release, url, org, project, authToken, configFile, stripPrefix,
	//   urlPrefix, include, ignore
	silent: true // Suppresses all logs
	// For all available options, see:
	// https://github.com/getsentry/sentry-webpack-plugin#options.
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
