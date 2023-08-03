import '../../../globals.css';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { getTopCreatorPopularities } from '@kittr/metrics';
import { prisma } from '@kittr/prisma';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import { AppWrapper } from '@/app/(creators)/channel/[channel]/AppWrapper';
import { inter } from '@/app/fonts';
import type { Params } from '@/app/(creators)/channel/[channel]/params';
import { getChannel } from '@/fetches/getChannel';

export const revalidate = 60;

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

export const generateStaticParams = async () => {
  const limit = process.env.VERCEL_ENV === 'production' ? 30 : 10;

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

export function Layout({
  sidebar,
  body,
}: {
  sidebar: ReactNode;
  body: ReactNode;
}) {
  return (
    <html className={`${inter.variable}`} lang="en">
      <body className="flex flex-row justify-center flex-grow w-full m-auto font-sans antialiased bg-zinc-800 ">
        <AppWrapper body={body} sidebar={sidebar} />
      </body>
    </html>
  );
}

export default Layout;
