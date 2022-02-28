export interface IManager {
	/** UID of the user from Firebase */
	uid: string
	/** kittr management role for this channel */
	role: "Owner" | "Administrator" | "Editor"
}

interface IManagerData {
	/** UID of the user from Firebase */
	uid: string
	/** User's display name */
	displayName: string
	/** Email for the user */
	email: string
	/** kittr management role for this channel */
	role: string
}
