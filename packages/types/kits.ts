import type {
	WarzoneKitBase,
	WarzoneCommandCode,
	WarzoneTwoCommandCode,
	WarzoneTwoKitBase,
	WarzoneKit,
	WarzoneTwoKit,
	WarzoneTwoKitOption,
	WarzoneKitOption,
} from '@kittr/prisma';

export interface Kit extends WarzoneKit, WarzoneTwoKit {}
export interface KitBase extends WarzoneKitBase, WarzoneTwoKitBase {}
export interface KitOption extends WarzoneKitOption, WarzoneTwoKitOption {}
export interface CommandCode
	extends WarzoneCommandCode,
		WarzoneTwoCommandCode {}

export interface IKitOptionRaw {
	/** Options within the game are shown with some particular order. Use this field to mimic that order. */
	orderPlacement: number | string;
	/** ObjectId for the Kit Option from database */
	optionId: string;
}

export interface IKitUserData {
	/** User provided title to augment the Kit Base. Used to provide more information/context for the audience. */
	customTitle: string;
	/** In Warzone, weapons can be given a certain camo. This is for that. This may not be applicable to other games... */
	blueprint: string;
	/** User selection on whether to feature this Kit in their profile or not. */
	featured: boolean;
	/** A user provided YouTube URL to embed into their Kit's page */
	youtubeURL?: string;
	tiktokId?: string;
	quote?: string;
}

export interface KitUpdates extends Kit {
	base: KitBase;
	options: KitOption[];
}

export interface KitWithOptionalId extends Omit<KitUpdates, 'id'> {
	id?: string;
}

export type OverlayKit = Kit & {
	options: KitOption[];
	base: KitBase & { commandCodes: CommandCode[] };
};
