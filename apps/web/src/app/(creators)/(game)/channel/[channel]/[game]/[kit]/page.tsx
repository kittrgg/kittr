import { notFound, redirect } from 'next/navigation';
import { Header } from '@/app/(creators)/Header';
import { LightRay } from '@/app/(creators)/LightRay';
import { getKit } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/fetches';
import {
  getKitsByGame,
  getShopCode,
} from '@/app/(creators)/(game)/channel/[channel]/[game]/fetches';
import { PageShell } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/PageShell';
import type { Params } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/types';
import { getChannel } from '@/fetches/getChannel';
import { BackgroundImage } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/BackgroundImage';
import { LogKitMetrics } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/LogKitMetrics';

export const revalidate = 60;

async function Page({ params }: { params: Params }) {
  const channel = await getChannel(params.channel);

  const kits = await getKit({
    channel: params.channel,
    game: params.game,
    kit: params.kit,
  });

  const allChannelGameKits = await getKitsByGame({
    game: params.game,
    channelName: params.channel,
  });

  const shopCode = await getShopCode({
    channelUrlSafeName: params.channel,
    gameUrlSafeName: params.game,
  });

  if (!channel) {
    return notFound();
  }

  if (!kits.length) {
    redirect(`/channel/${params.channel}/${params.game}`);
  }

  return (
    <>
      <LogKitMetrics
        channelDisplayName={channel.displayName}
        channelId={channel.id}
        channelUrlSafeName={channel.urlSafeName}
        gameUrlSafeName={params.game}
        kitBaseDisplayName={kits[0].base.displayName}
      />
      <Header channelUrlSafeName={params.channel} shopCode={shopCode?.code} />
      <LightRay />
      <PageShell
        allChannelGameKits={allChannelGameKits}
        channel={params.channel}
        game={params.game}
        kits={kits}
        youTubeAutoplay={channel.profile?.youtubeAutoplay ?? false}
      />

      <BackgroundImage
        kitBaseDisplayName={kits[0].base.displayName}
        kitBaseImageUrl={kits[0].base.imageUrl}
      />
    </>
  );
}

export default Page;
