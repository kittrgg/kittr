import { prisma } from '@kittr/prisma';
import { Header } from '@/app/(creators)/Header';

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

  return (
    <div>
      <Header channelUrlSafeName={params.channel} />
      <pre>{JSON.stringify(kits, null, 2)}</pre>
    </div>
  );
}

export default Page;
