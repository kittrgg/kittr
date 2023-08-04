import '@/app/globals.css';

import { type ReactNode } from 'react';
import type { Metadata } from 'next';
import { getTopCreatorPopularities } from '@kittr/metrics';
import { prisma } from '@kittr/prisma';
import {
  AppShell,
  AppShellLinkItem,
  SidebarSeparator,
  SidebarHeader,
} from '@kittr/ui/new';
import Link from 'next/link';
import { LayoutGrid, Users, Gamepad } from '@kittr/ui/icons';
import Image from 'next/image';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import { inter } from '@/app/fonts';
import type { Params } from '@/app/(creators)/(game)/channel/[channel]/[game]/params';
import { getChannel } from '@/fetches/getChannel';
import { FooterImage, footerLinks } from '@/app/footer';
import { getKitsByGame } from '@/app/(creators)/(game)/channel/[channel]/[game]/fetches';

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

export async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}) {
  const kits = await getKitsByGame({
    game: params.game,
    channelName: params.channel,
  });

  return (
    <html className={`${inter.variable}`} lang="en">
      <body className="flex flex-row justify-center flex-grow w-full m-auto font-sans antialiased bg-zinc-800">
        <AppShell
          footerImage={<FooterImage />}
          footerLinks={footerLinks}
          linkComponent={Link}
          nav={
            <>
              <AppShellLinkItem className="flex flex-row items-center justify-center m-0">
                <Link
                  className="flex flex-row items-center justify-center"
                  href="/"
                >
                  <Image
                    alt="kittr logo"
                    height={48}
                    priority
                    src="/img/logo.svg"
                    width={89}
                  />
                </Link>
              </AppShellLinkItem>

              <AppShellLinkItem>
                <Link href="/dashboard">
                  <LayoutGrid />
                  Dashboard
                </Link>
              </AppShellLinkItem>

              <AppShellLinkItem>
                <Link href="/games">
                  <Gamepad />
                  All games
                </Link>
              </AppShellLinkItem>
              <AppShellLinkItem>
                <Link href="/channels">
                  <Users />
                  All channels
                </Link>
              </AppShellLinkItem>

              <SidebarSeparator />

              <SidebarHeader>Kits</SidebarHeader>
              {kits.map((kit) => {
                return (
                  <AppShellLinkItem key={kit.id}>
                    <Link
                      href={`/channel/${params.channel}/${
                        params.game
                      }/${encodeURI(kit.base.displayName)}`}
                    >
                      {kit.base.displayName}
                    </Link>
                  </AppShellLinkItem>
                );
              })}
            </>
          }
          pathnameForCloseHook={`/channel/${params.channel}`}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}

export default Layout;
