import { GameCard, H2, Avatar, Button, H1 } from '@kittr/ui/new';
import { download } from '@kittr/firebase/storage';
import Link from 'next/link';
import type { LinkProperty } from '@kittr/prisma';
import {
  getTwitchLink,
  grabLoginName,
  getStreamLiveStatus,
} from '@kittr/twitch';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ChannelSocials } from '@kittr/ui/social-icons';
import { capitalizeFirst } from '@kittr/utils';
import { getChannel } from '@/fetches/getChannel';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import type { Params } from '@/app/(creators)/channel/[channel]/params';

// export const generateMetadata = async ({
//   params,
// }: {
//   params: Params;
// }): Promise<Metadata> => {
//   const channel = await getChannel(params.channel);

//   if (!channel) {
//     return {
//       title: 'No creator found.',
//       description: "Doesn't look like anyone is here yet",
//       robots: 'noindex',
//     };
//   }

//   return generateKittrMetadata({
//     title: `${channel.displayName} - kittr`,
//     description: `${channel.displayName}'s kittr profile.`,
//     canonicalURL: `/channels/${channel.urlSafeName}`,
//   });
// };

async function ChannelProfilePage({ params }: { params: Params }) {
  const channel = await getChannel(params.channel);

  if (!channel) {
    return notFound();
  }

  const twitchLink = grabLoginName(getTwitchLink(channel));
  const liveStatus = await getStreamLiveStatus(twitchLink);
  const gamesWithImages = await Promise.all(
    channel.games.map(async (game) => ({
      ...game,
      titleImageUrl: await download(game.titleImageUrl),
    })),
  );

  return (
    <>
      <div className="flex flex-row items-center gap-4">
        <Avatar
          hasProfileImg={channel.profile?.hasProfileImage}
          id={channel.id}
          isLive={liveStatus}
          username={channel.displayName}
        />
        <H1 preset="h3">{channel.displayName}</H1>
      </div>

      <section className="flex flex-row flex-wrap justify-center gap-4">
        {channel.links.map((link) => {
          return (
            <Button
              className="w-full md:w-1/3"
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

      <div>
        <H2>Kits</H2>
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
