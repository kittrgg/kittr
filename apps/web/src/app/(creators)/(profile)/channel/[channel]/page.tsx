import { GameCard, H2 } from '@kittr/ui/new';
import { download } from '@kittr/firebase/storage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTopCreatorPopularities } from '@kittr/metrics';
import { prisma } from '@kittr/prisma';
import { getChannel } from '@/fetches/getChannel';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import type { Params } from '@/app/(creators)/(profile)/channel/[channel]/params';
import { Header } from '@/app/(creators)/Header';
import { LightRay } from '@/app/(creators)/LightRay';
import { SocialLinkButton } from '@/app/(creators)/(profile)/channel/[channel]/components/SocialLinkButton';

export const generateStaticParams = async () => {
  const limit = process.env.VERCEL_ENV === 'production' ? 30 : 5;

  const topCreators = await getTopCreatorPopularities({
    limit,
    field: 'channelId',
  });

  if (!topCreators) {
    throw new Error('Failed fetching top creators.');
  }

  const urlSafeNames = await prisma.channel.findMany({
    where: {
      id: {
        in: topCreators.map((creator) => creator.id),
      },
    },
    select: { urlSafeName: true },
  });

  return urlSafeNames.map((name) => ({ channel: name.urlSafeName }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const channel = await getChannel(params.channel);

  if (!channel) {
    return {
      title: 'No creator found.',
      description: "Doesn't look like anyone is here yet",
      robots: 'noindex',
    };
  }

  return generateKittrMetadata({
    title: `${channel.displayName} - kittr`,
    description: `${channel.displayName}'s kittr profile.`,
    canonicalURL: `/channels/${channel.urlSafeName}`,
  });
};

async function ChannelProfilePage({ params }: { params: Params }) {
  const channel = await getChannel(params.channel);

  if (!channel) {
    return notFound();
  }

  const gamesWithImages = await Promise.all(
    channel.games.map(async (game) => ({
      ...game,
      titleImageUrl: await download(game.titleImageUrl),
    })),
  );

  return (
    <>
      <Header channelUrlSafeName={channel.urlSafeName} />
      <LightRay />

      <section className="relative z-10 flex flex-row flex-wrap justify-center gap-4">
        {channel.links.map((link) => {
          return <SocialLinkButton key={link.id} link={link} />;
        })}
      </section>

      <div className="relative z-10">
        <H2>Games</H2>
        <div className="flex flex-row flex-wrap items-center justify-center gap-6">
          {gamesWithImages.map((game) => {
            return (
              <GameCard
                extraChildren={
                  <p>
                    {game.urlSafeName === 'warzone'
                      ? channel._count.warzoneKits
                      : channel._count.warzoneTwoKits}{' '}
                    kits
                  </p>
                }
                href={`/channel/${params.channel}/${game.urlSafeName}`}
                imageProps={{
                  src: game.titleImageUrl,
                  alt: `${game.displayName} cover art`,
                }}
                key={game.urlSafeName}
                linkComponent={Link}
                title={game.displayName}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ChannelProfilePage;
