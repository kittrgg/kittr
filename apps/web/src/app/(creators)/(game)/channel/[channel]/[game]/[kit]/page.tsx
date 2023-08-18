import { notFound, redirect } from 'next/navigation';
import { Header } from '@/app/(creators)/Header';
import { LightRay } from '@/app/(creators)/LightRay';
import { getKits } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/fetches';
import { getShopCode } from '@/app/(creators)/(game)/channel/[channel]/[game]/fetches';
import { PageShell } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/PageShell';
import type { Params } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/params';
import { getChannel } from '@/fetches/getChannel';
import { BackgroundImage } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/BackgroundImage';

export const revalidate = 60;

async function Page({ params }: { params: Params }) {
  const channel = await getChannel(params.channel);

  const kits = await getKits({
    channel: params.channel,
    game: params.game,
    kit: params.kit,
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
      <Header channelUrlSafeName={params.channel} shopCode={shopCode?.code} />
      <LightRay />
      <PageShell
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
