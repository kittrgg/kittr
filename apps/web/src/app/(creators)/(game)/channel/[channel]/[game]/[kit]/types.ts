import { getKit } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/fetches';
import { getKitsByGame } from '@/app/(creators)/(game)/channel/[channel]/[game]/fetches';

export type Params = {
  channel: string;
  game: string;
  kit: string;
};

export type Kits = Awaited<ReturnType<typeof getKit>>;
