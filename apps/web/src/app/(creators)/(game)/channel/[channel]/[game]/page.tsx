import type { Params } from './params';
import { getKitsByGame } from '@/app/(creators)/(game)/channel/[channel]/[game]/fetches';

export async function Page({ params }: { params: Params }) {
  const kits = await getKitsByGame({
    game: params.game,
    channelName: params.channel,
  });

  return <div>{/* <pre>{JSON.stringify(kits, null, 2)}</pre> */}</div>;
}

export default Page;
