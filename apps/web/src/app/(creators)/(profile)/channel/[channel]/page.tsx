import { GameCard, H2, Button } from '@kittr/ui/new';
import { download } from '@kittr/firebase/storage';
import Link from 'next/link';
import type { LinkProperty } from '@kittr/prisma';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ChannelSocials } from '@kittr/ui/social-icons';
import { capitalizeFirst } from '@kittr/utils';
import { getChannel } from '@/fetches/getChannel';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import type { Params } from '@/app/(creators)/(profile)/channel/[channel]/params';
import { Header } from '@/app/(creators)/Header';

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

      <div className="absolute -top-10 left-[15%] -rotate-12">
        <div className="absolute inset-0 w-16 h-[30rem] bg-stone-600">
          <div className="absolute z-0 overflow-visible text-black -inset-40 backdrop-blur-3xl rounded-3xl" />
        </div>

        <div className="absolute inset-0 w-16 h-[30rem] bg-zinc-600">
          <div className="absolute z-0 overflow-visible text-black -inset-40 backdrop-blur-2xl rounded-3xl" />
        </div>
      </div>

      <section className="relative z-10 flex flex-row flex-wrap justify-center gap-4">
        {channel.links.map((link) => {
          return (
            <Button
              className="w-full md:w-1/3 bg-zinc-900 hover:bg-zinc-800"
              key={link.property}
              variant="outline"
            >
              <a
                className="flex flex-row items-center justify-center gap-4"
                href={link.value}
                rel="noopener noreferrer"
                target="_blank"
              >
                {ChannelSocials({
                  property:
                    link.property.toLowerCase() as Lowercase<LinkProperty>,
                })}
                <p>{capitalizeFirst(link.property)}</p>
              </a>
            </Button>
          );
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
