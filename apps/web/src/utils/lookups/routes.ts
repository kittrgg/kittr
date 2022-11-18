export const Routes = {
	CHANNEL: {
		/** Output result: `/channels`  */
		LIST: `/channels`,
		/** Output result: `/channel/:channel` */
		createPath: (channel: string) => `/channel/${channel}`,
		/** Output result: Output result: `/channels/search/:search-term`  */
		createSearchPath: (searchTerm: string) => `/channels/search/${searchTerm}`,
		GAME: {
			/** Output result: `/channel/:channel/:game` */
			createPath: (channel: string, game: string, params?: string) => `/channel/${channel}/${game}${params || ""}`,
			/** Output result: `/channel/:channel/:game/overlay` */
			createOverlayPath: (channel: string, game: string) => `/channel/${channel}/${game}/overlay`
		}
	},
	GAMES: {
		/** Output result: `/games` */
		LIST: `/games`,
		/** Output result: `/games/:channel` */
		createPath: (channel: string) => `/games/${channel}`
	},
	/** Output result: `/dashboard` */
	DASHBOARD: "/dashboard",
	/** Output result: `/sign-up` */
	SIGN_UP: "/sign-up",
	/** Output result: `/` */
	ROOT: "/",
	/** Output result: `/about` */
	ABOUT: "/about",
	/** Output result: `/faq` */
	FAQ: "/faq",
	/** Output result: `/contact-us` */
	CONTACT: "/contact-us",
	/** Output result: `/terms-of-use` */
	TERMS: "/terms-of-use",
	/** Output result: `/privacy-policy` */
	PRIVACY: "/privacy-policy",
	/** Output result: `/forgot-password` */
	FORGOT_PASSWORD: "/forgot-password",
	/** Output result: `/email-changed` */
	EMAIL_CHANGED: "/email-changed",
	/** Output result: `https://discord.gg/KWaPCU2d3S` */
	DISCORD: "https://discord.gg/KWaPCU2d3S",
	/** Output result: `https://twitter.com/messages/compose?recipient_id=1419806137088577537` */
	TWITTER_DM: "https://twitter.com/messages/compose?recipient_id=1419806137088577537",
	/** Output result: `https://twitter.com/kittrgg` */
	TWITTER: "https://twitter.com/kittrgg"
}
