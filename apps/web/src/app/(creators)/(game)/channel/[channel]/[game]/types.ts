import type { getKitsByGame } from '@/app/(creators)/(game)/channel/[channel]/[game]/fetches';

export interface Params {
	channel: string;
	game: string;
	kit?: string;
}

export type AllChannelGamesKits = Awaited<ReturnType<typeof getKitsByGame>>;
