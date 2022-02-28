import { IWarzoneGameInfo } from "./game"

interface IKitBase {
	/** ObjectId from database */
	_id: string
	/** Name of Base to present on front-end/client */
	displayName: string
	/** Stringified ObjectId for the game that this Base belongs to */
	gameId: string
	/** Picture of the Base from the game */
	image: string
	/** Game data for the Base  */
	gameInfo: {
		/** Text description of the Base */
		blurb: string
		/** Statistical performance info for the Base  */
		stats: {
			accuracy: number
			range: number
			mobility: number
			damage: number
			fireRate: number
			control: number
		}
		/** Kit Options that are applicable to the Base */
		availableOptions: Array<{ orderPlacement: number; optionId: string }>
		/** Maximum allowed Kit Options because of how the base gets used in game */
		maxOptions: number
	}
	/** String to use in urls to refer to this Base */
	gameUrlSafeName: string
	/** Twitch chat commands that refer to this Base */
	commandCodes: Array<string>
	/** Type within the game that the Base belongs to.
	 * TODO: This should get moved into the gameInfo object.
	 */
	category: string
}

interface IKitOption {
	/** ObjectId from database */
	_id: string
	/** Stringified ObjectId of the game that this Option belongs to */
	gameId: string
	/** Slot on the Kit Base that this Option can occupy */
	slotKey: string
	/** Name of the Kit Option to present on front-end/client */
	displayName: string
}

interface IKitOptionRaw {
	/** Options within the game are shown with some particular order. Use this field to mimic that order. */
	orderPlacement: string | number
	/** ObjectId for the Kit Option from database */
	optionId: string
}

interface IKitUserData {
	/** User provided title to augment the Kit Base. Used to provide more information/context for the audience. */
	customTitle: string
	/** In Warzone, weapons can be given a certain camo. This is for that. This may not be applicable to other games... */
	blueprint: string
	/** User selection on whether to feature this Kit in their profile or not. */
	featured: boolean
	/** A user provided YouTube URL to embed into their Kit's page */
	youtubeURL?: string
	tiktokId?: string
	quote?: string
}

interface IKitUpdates {
	/** ObjectId from database */
	_id: string | undefined
	/** Stringified ObjectId of the Base for this Kit */
	baseId: string
	/** User provided values */
	userData: IKitUserData
	/** Kit Base information for this Kit */
	base: IKitBase
	/** User selected Kit Options to apply to the Kit base */
	options: Array<IKitOption>
}

interface IKitRaw {
	/** ObjectId from database */
	_id: string
	/** Stringified ObjectId of the Base for this Kit */
	baseId: string
	/** User selected Kit Options to apply to the Kit base */
	options: Array<IKitOptionRaw>
	/** User provided values */
	userData: IKitUserData
}

export interface IKit {
	/** ObjectId from database */
	_id: string
	/** Stringified ObjectId of the Base for this Kit */
	baseId: string
	/** User selected Kit Options to apply to the Kit base */
	options: Array<IKitOption>
	/** The urlSafeName for the game that the Base of this Kit is for */
	gameUrlSafeName?: string
	/** User provided values */
	userData: IKitUserData
	/** Kit Base information for this Kit */
	base: IKitBase
	/** Information about the game that this Kit is a part of */
	gameInfo?: IWarzoneGameInfo
}
