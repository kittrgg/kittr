export interface StreamerViewCounts {
	startDate: string
	endDate: string
}

export interface NextClientEndpointError {
	error: boolean
	errorMessage: string
}

export type NextClientPayload<T> = T | NextClientEndpointError

export interface NextServerError {
	error: boolean
	errorMessage: string
}

export type NextServerPayload<T> = T | NextServerError

export type ReduxModalState = { type: DashboardModals; data: any }

/** Workflows that users can utilize to add their commands to their channel */
export type TCommandMethod = "dashboard" | "nightbot" | "channel-elements"

/** Twitch command strategies to add kittr commands to chat */
export type TTwitchStrategy = "!editcom" | "!addcom" | "!commands add"

export type SocialPlatform =
	| "twitch"
	| "twitter"
	| "youtube"
	| "instagram"
	| "facebook"
	| "discord"
	| "tiktok"

/** Dasbhoard Modal Options */
export type DashboardModals =
	| ""
	| "Error Notification"
	| "Create New Channel"
	| "Add Manager"
	| "About Account Managers"
	| "Delete Manager"
	| "Set New Owner"
	| "Confirm Changing Owner"
	| "Manager Role Change"
	| "Help"
	| "Add Game"
	| "Delete Game"
	| "Export Bot Commands"
	| "Channel Deleter"
	| "Kit Delete Confirmation"
	| "Kit Naming Warning"
	| "Quick Command Export"
	| "Add Link"
	| "Premium Sign Up"
	| "Premium Plans"
	| "Add Spec"
	| "Add Affiliate"
	| "Tutorial"

export type ActiveKitOverlays =
	| "Banner"
	| "Banner Ticker"
	| "Display Ticker"
	| "Display"
