import { LinkProperty } from '@kittr/prisma';
import type { ChannelWithLinks } from '../getLiveStreams';

export * from './auth';
export * from './getFromApi';
export * from './grabLoginName';

export const getTwitchLink = (channel: ChannelWithLinks) =>
	channel.links.find((link) => link.property === LinkProperty.TWITCH)?.value ??
	'';
