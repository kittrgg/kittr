import { prisma } from '@kittr/prisma';
import { redirect } from 'next/navigation';
import { Header } from '@/app/(creators)/Header';
import { LightRay } from '@/app/(creators)/LightRay';

export function generateStaticParams({
  params,
}: {
  params: { channel: string; game: string; kit: string };
}) {
  return {
    channel: params.channel,
    game: params.game,
    kit: params.kit,
  };
}

export async function Page({
  params,
}: {
  params: { channel: string; game: string; kit: string };
}) {
  const kits =
    params.game === 'warzone'
      ? await prisma.warzoneKit.findMany({
          where: {
            channel: {
              urlSafeName: params.channel,
            },
            base: {
              displayName: decodeURI(params.kit),
            },
          },
          include: {
            base: { select: { displayName: true } },
          },
        })
      : await prisma.warzoneTwoKit.findMany({
          where: {
            channel: {
              urlSafeName: params.channel,
            },
            base: {
              displayName: decodeURI(params.kit),
            },
          },
          include: {
            base: { select: { displayName: true } },
          },
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
