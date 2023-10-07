import type { LinkProperty } from '@kittr/prisma';

export const linkPrefixes: Record<LinkProperty, string> = {
	TWITCH: 'https://www.twitch.tv/',
	TWITTER: 'https://twitter.com/',
	YOUTUBE: 'https://www.youtube.com/',
	INSTAGRAM: 'https://www.instagram.com/',
	FACEBOOK: 'https://www.facebook.com/',
	DISCORD: 'https://discord.gg/',
	TIKTOK: 'https://www.tiktok.com/@',
};
