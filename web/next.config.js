module.exports = {
	poweredByHeader: false,
	pageExtensions: ["page.tsx", "api.ts"],
	images: {
		domains: ["firebasestorage.googleapis.com"]
	},
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
			{
				source: "/blog",
				destination: "/blog/1",
				permanent: true
			}
		]
	}
}
