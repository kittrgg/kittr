import { prisma } from '@kittr/prisma';

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
        });

  return (
    <div>
      <pre>{JSON.stringify(kits, null, 2)}</pre>
    </div>
  );
}

export default Page;
