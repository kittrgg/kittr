export interface IGame {
	/** ObjectId from database */
	_id: string
	/** ObjectId from database */
	id: string
	/** Name of game to present on front-end/client */
	displayName: string
	/** Image to use for backgrounds */
	backgroundImage: string
	/** Image to use for game cover art, cards, icons, etc. */
	titleImage: string
	/** Object version from database */
	__v: number
	/** Boolean for if the game is currently active on kittr */
	active: boolean
	/** Name for game to be used in urls */
	urlSafeName: string
	/** For blur-ups in Next.js */
	blurDataURL: string
	/** Gaming studio that built the game */
	developer: string
	/** Genres that the game fits into */
	genres: Array<string>
	/** Platforms that the game can be played on */
	platforms: Array<string>
	/** Date of the release of the game */
	releaseDate: Date
	/** Creator code for the channel for the given game. Note that this will only be a part of the object if the game is nested into the channel. */
	code?: string
	/** Custom Twitch command string created by users. Note that this will only be a part of the object when pulling the entire channel's data. */
	commandString?: string
}

interface IWarzoneWeaponStats {
	accuracy: number
	range: number
	mobility: number
	damage: number
	fireRate: number
	control: number
}

export interface IWarzoneGameInfo {
	/** Text description of the Base */
	blurb: string
	/** Statistical performance info for the Base  */
	stats: IWarzoneWeaponStats
}

interface IWarzoneAttachmentSlots {
	Muzzle?: string
	Barrel?: string
	Laser?: string
	Guard?: string
	Optic?: string
	Stock?: string
	Underbarrel?: string
	["Trigger Action"]?: string
	["Bolt Assembly"]?: string
	Ammunition?: string
	["Rear Grip"]?: string
	["Pump Grip"]?: string
	Perk?: string
	Pumps?: string
}
