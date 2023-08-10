import { redirect } from 'next/navigation';
import { Header } from '@/app/(creators)/Header';
import { LightRay } from '@/app/(creators)/LightRay';
import { getKits } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/fetch';

export const revalidate = 60;

export async function generateStaticParams({
  params,
}: {
  params: { channel: string; game: string; kit: string };
}) {
  const kits = await getKits({
    channel: params.channel,
    game: params.game,
    kit: params.kit,
  });

  const last = kits.map((kit) => encodeURI(kit.base.displayName));
  console.log({ anotherlast: last });
  return last;
}

export async function Page({
  params,
}: {
  params: { channel: string; game: string; kit: string };
}) {
  const kits = await getKits({
    channel: params.channel,
    game: params.game,
    kit: params.kit,
  });

  if (!kits.length) {
    redirect(`/channel/${params.channel}/${params.game}`);
  }

  return (
    <>
      <Header channelUrlSafeName={params.channel} />
      <LightRay />
      <pre className="relative z-20">{JSON.stringify(kits, null, 2)}</pre>
    </>
  );
}

export default Page;
