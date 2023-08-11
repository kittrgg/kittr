import { redirect } from 'next/navigation';
import { prisma } from '@kittr/prisma';
import { Header } from '@/app/(creators)/Header';
import { LightRay } from '@/app/(creators)/LightRay';
import { getKits } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/fetch';
import { YouTubePlayer } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/YouTubePlayer';
import { getShopCode } from '@/app/(creators)/(game)/channel/[channel]/[game]/fetches';
import { getChannel } from '@/fetches/getChannel';
import { TikTokPlayer } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/TikTokPlayer';

export const revalidate = 60;

// export async function generateStaticParams({
//   params,
// }: {
//   params: { channel: string; game: string; kit: string };
// }) {
//   const kits = await getKits({
//     channel: params.channel,
//     game: params.game,
//     kit: params.kit,
//   });

//   const last = kits.map((kit) => ({ kit: encodeURI(kit.base.displayName) }));
//   return last;
// }

export async function Page({
  params,
}: {
  params: { channel: string; game: string; kit: string };
}) {
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

  if (!kits.length) {
    redirect(`/channel/${params.channel}/${params.game}`);
  }

  return (
    <>
      <Header channelUrlSafeName={params.channel} shopCode={shopCode?.code} />
      <LightRay />
      <div className="relative z-10 flex flex-col">
        <div className="flex flex-col gap-2">
          {kits[0].options.map((opt) => {
            return (
              <div key={opt.id}>
                <p>{opt.slotKey}</p>
                <p>{opt.displayName}</p>
              </div>
            );
          })}
        </div>
        <p>{kits[0].base.blurb}</p>
        <p>popularity</p>
        {kits[0].youtubeUrl ? (
          <YouTubePlayer
            autoplay={channel?.profile?.youtubeAutoplay ?? false}
            youTubeUrl={kits[0].youtubeUrl}
          />
        ) : null}
        {kits[0].tiktokUrl ? <TikTokPlayer /> : null}
      </div>
    </>
  );
}

export default Page;
