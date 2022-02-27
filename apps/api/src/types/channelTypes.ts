import { IGame } from "./gameTypes"
import { IKit, IKitRaw } from "./kitsTypes"
import { IManager } from "./managerTypes"

interface IChannelLinks {
	twitch?: string
	twitter?: string
	youtube?: string
	instagram?: string
	facebook?: string
	discord?: string
	tiktok?: string
}

interface IChannelMeta {
	brandColors?: {
		primary?: string
	}
	setupPhotos?: {
		"1"?: boolean
		"2"?: boolean
		"3"?: boolean
		"4"?: boolean
	}
	specs?: {
		[key: string]: string
	}
	affiliates?: {
		[key: string]: {
			code?: string
			description?: string
			link?: string
		}
	}
	hasCoverPhoto?: boolean
	stripeId?: string
	premiumType?: string
	hasProfileImage: boolean
	profileImage: string
	/** Boolean for if we should autoplay this channel's youtube videos when we can */
	youtubeAutoplay: boolean
	/** User provided links to their various social channels */
	links: IChannelLinks
}

/** Must be serializable to play nice with styled-components themeing! */
interface IOverlayTheme {
	isOverlayVisible?: "off" | "on"
	backgroundColorPrimary: string
	backgroundColorSecondary: string
	textColorPrimary: string
	textColorSecondary: string
	textColorAccent: string
}

/** Must be serializable to play nice with styled-components themeing! */

interface IOverlayData {
	displayName: string
	primaryKit?: IKit
	secondaryKit?: IKit
}

export interface IOverlay {
	isOverlayVisible?: "off" | "on"
	backgroundColorPrimary: string
	backgroundColorSecondary: string
	textColorPrimary: string
	textColorSecondary: string
	textColorAccent: string
	primaryKit?: IKit
	secondaryKit?: IKit
}

export interface IChannel {
	/** ObjectId from database */
	_id: string
	/** Managers who are allowed to interact with this channel */
	managers: Array<IManager>
	/** Games that this channeler has listed for their kittr profile */
	games: Array<IGame & { code?: string; commandString?: string }>
	/** ISO date that this channel was created on */
	createdDate: string
	/** Name of channel to present on front-end/client */
	displayName: string
	/** Display name made safe for urls */
	urlSafeName: string
	/** Meta information for the channel */
	meta: IChannelMeta
	/** The kits created for this channel */
	kits: Array<IKit>
	/** Manager who was the most recent to update some piece of information for this channel */
	previousUpdater: string
	/** Amount of time that a kit has been visited for this channel */
	viewCount: number
	/** Information to be used for creating and changing the interactive overlay */
	overlay: (IOverlayData & IOverlayTheme) | null
	/** Database version for this channel */
	__v: number
}

export interface IRawChannel {
	/** ObjectId from database */
	_id: string
	/** Managers who are allowed to interact with this channel */
	managers: Array<IManager>
	/** Games that this channeler has listed for their kittr profile */
	games: Array<{ id: string; code?: string; commandString?: string }>
	/** ISO date that this channel was created on */
	createdDate: string
	/** Name of channel to present on front-end/client */
	displayName: string
	/** Display name made safe for urls */
	urlSafeName: string
	/** Meta information for the channel */
	meta: IChannelMeta
	/** The kits created for this channel */
	kits: Array<Partial<IKitRaw>>
	/** Manager who was the most recent to update some piece of information for this channel */
	previousUpdater: string
	/** Amount of time that a kit has been visited for this channel */
	viewCount: number
	/** Information to be used for creating and changing the interactive overlay */
	overlay: (IOverlayData & IOverlayTheme) | null
	/** Database version for this channel */
	__v: number
}
