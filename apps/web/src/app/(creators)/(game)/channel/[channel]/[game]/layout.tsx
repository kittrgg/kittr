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
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from '@kittr/ui/new';
import Link from 'next/link';
import { Star, LayoutGrid, Users, Gamepad } from '@kittr/ui/icons';
import Image from 'next/image';
import { notFound } from 'next/navigation';
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
  const game = await prisma.game.findFirst({
    where: { urlSafeName: params.game },
  });

  if (!channel) {
    return {
      title: 'No creator found.',
      description: "Doesn't look like anyone is here yet",
      robots: 'noindex',
    };
  }

  if (!game) {
    return {
      title: 'No game found.',
      description: "Doesn't look like a game is here yet",
      robots: 'noindex',
    };
  }

  return generateKittrMetadata({
    title: `${channel.displayName}'s ${game.displayName} - kittr`,
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
  const channel = await getChannel(params.channel);

  if (!channel) {
    return notFound();
  }

  const kits = await getKitsByGame({
    game: params.game,
    channelName: params.channel,
  });

  const kitNames: { name: string; count: number; featured: boolean }[] = [];

  kits.forEach((kit) => {
    const foundInd = kitNames.findIndex(
      (name) => name.name === kit.base.displayName,
    );

    if (foundInd === -1) {
      return kitNames.push({
        name: kit.base.displayName,
        count: 1,
        featured: kit.featured,
      });
    }

    kitNames[foundInd].count++;
    kitNames[foundInd].featured = kitNames[foundInd].featured
      ? kitNames[foundInd].featured
      : kit.featured;
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

              {channel.games.length > 1 ? (
                <>
                  <SidebarHeader>Games</SidebarHeader>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue
                        placeholder={
                          channel.games.find(
                            (game) => game.urlSafeName === params.game,
                          )?.displayName
                        }
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800">
                      {channel.games.map((game) => {
                        return (
                          <Link
                            className="block p-2 hover:bg-zinc-700"
                            href={`/channel/${params.channel}/${game.urlSafeName}`}
                            key={game.urlSafeName}
                          >
                            {game.displayName}
                          </Link>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </>
              ) : null}

              <SidebarHeader>Kits</SidebarHeader>
              {kitNames
                .sort((a, b) => a.name.localeCompare(b.name))
                .sort((a, b) => Number(b.featured) - Number(a.featured))
                .map((kit) => {
                  const showCount = kit.count > 1;

                  return (
                    <AppShellLinkItem key={kit.name}>
                      <Link
                        href={`/channel/${params.channel}/${
                          params.game
                        }/${encodeURI(kit.name)}`}
                      >
                        {kit.featured ? (
                          <Star className="text-yellow-500 fill-yellow-500" />
                        ) : null}
                        {kit.name}
                        {showCount ? <> ({kit.count})</> : null}
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
