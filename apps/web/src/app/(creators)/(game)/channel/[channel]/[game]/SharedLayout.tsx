import '@/app/globals.css';

import { type ReactNode } from 'react';
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
import { inter } from '@/app/fonts';
import type { Params } from '@/app/(creators)/(game)/channel/[channel]/[game]/types';
import { getChannel } from '@/fetches/getChannel';
import { FooterImage, footerLinks } from '@/app/footer';
import { getKitsByGame } from '@/app/(creators)/(game)/channel/[channel]/[game]/fetches';

export async function SharedLayout({
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
                      </Link>
                    </AppShellLinkItem>
                  );
                })}
            </>
          }
          pathnameForCloseHook={`/channel/${params.channel}/${params.game}`}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}
