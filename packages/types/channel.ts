import type { WarzoneKit, WarzoneTwoKit } from '@kittr/prisma';

type Kit = WarzoneKit | WarzoneTwoKit;

export interface ChannelLinks {
	twitch?: string;
	twitter?: string;
	youtube?: string;
	instagram?: string;
	facebook?: string;
	discord?: string;
	tiktok?: string;
}

export interface ChannelMeta {
	brandColors?: {
		primary?: string;
	};
	setupPhotos?: {
		'1'?: boolean;
		'2'?: boolean;
		'3'?: boolean;
		'4'?: boolean;
	};
	specs?: Record<string, string>;
	affiliates?: Record<
		string,
		{
			code?: string;
			description?: string;
			link?: string;
		}
	>;
	hasCoverPhoto?: boolean;
	stripeId?: string;
	premiumType?: string;
	hasProfileImage: boolean;
	profileImage: string;
	/** Boolean for if we should autoplay this channel's youtube videos when we can */
	youtubeAutoplay: boolean;
	/** User provided links to their various social channels */
	links: ChannelLinks;
}

/** Must be serializable to play nice with styled-components themeing! */
export interface IOverlayTheme {
	isOverlayVisible?: 'off' | 'on';
	backgroundColorPrimary: string;
	backgroundColorSecondary: string;
	textColorPrimary: string;
	textColorSecondary: string;
	textColorAccent: string;
}

/** Must be serializable to play nice with styled-components themeing! */

export interface IOverlayData {
	displayName: string;
	primaryWzKit?: Kit;
	secondaryWzKit?: Kit;
}
