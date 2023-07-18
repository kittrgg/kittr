import { prisma } from '@kittr/prisma';
import { getTopCreatorPopularities } from '@kittr/metrics';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getChannel } from './getChannel';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';

interface PageParams {
  params: { channel: string };
}

export const dynamicParams = true;

export const generateMetadata = async ({
  params: { channel: urlSafeName },
}: PageParams): Promise<Metadata> => {
  const channel = await getChannel(urlSafeName);

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

export const generateStaticParams = async () => {
  const limit = process.env.VERCEL_ENV === 'production' ? 30 : 1;

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

async function ChannelProfilePage({ params }: PageParams) {
  const channel = await getChannel(params.channel);

  if (!channel) {
    return notFound();
  }

  return <pre>{JSON.stringify(channel, null, 2)}</pre>;
  // return <ChannelProfile />;
}

export default ChannelProfilePage;

// export const getStaticProps = async ({
//   params,
// }: {
//   params: { channel: string };
// }) => {
//   const { channel: urlSafeName } = params;
//   const ssg = await createSSGHelper();

//   const channel = await ssg.channels.profile.get.fetch(urlSafeName);

//   const twitchLink = channel?.links.find(
//     (channel) => channel.property === 'TWITCH',
//   )?.value;

//   try {
//     if (twitchLink) {
//       await ssg.twitch['profile-page'].fetch(twitchLink);
//     }
//   } catch (error) {
//     console.log(
//       `A Twitch profile was not found for user with urlSafeName ${urlSafeName}.`,
//     );
//   }

//   return {
//     props: {
//       trpcState: ssg.dehydrate(),
//     },
//     revalidate: 60,
//   };
// };

// export default ChannelProfilePage;
