import type { getKit } from '@/app/(creators)/(game)/channel/[channel]/(kit)/[game]/[kit]/fetches';

export interface Params {
	channel: string;
	game: string;
	kit: string;
}

export type Kits = Awaited<ReturnType<typeof getKit>>;
