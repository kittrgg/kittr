import '@/app/globals.css';

import { type ReactNode } from 'react';
import {
  AppShell,
  AppShellLinkItem,
  SidebarSeparator,
  SidebarHeader,
  Avatar,
  cn,
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

              <AppShellLinkItem>
                <Link
                  className="flex flex-row items-center"
                  href={`/channel/${params.channel}`}
                >
                  <Avatar
                    className="w-8 h-8"
                    hasProfileImg={channel.profile?.hasProfileImage}
                    id={channel.id}
                    username={channel.displayName}
                  />
                  Back to profile
                </Link>
              </AppShellLinkItem>

              <SidebarHeader>Kits</SidebarHeader>
              {kitNames
                .sort((a, b) => a.name.localeCompare(b.name))
                .sort((a, b) => Number(b.featured) - Number(a.featured))
                .map((kit) => {
                  return (
                    <AppShellLinkItem key={kit.name}>
                      <Link
                        className={cn(
                          'pl-2 font-medium ',
                          kit.featured
                            ? 'from-white from-[20px] to-yellow-500 text-transparent bg-clip-text bg-gradient-to-r'
                            : '',
                        )}
                        href={`/channel/${params.channel}/${
                          params.game
                        }/${encodeURI(kit.name)}`}
                      >
                        {kit.name}
                        {kit.featured ? (
                          <Star className="text-yellow-500 fill-yellow-500" />
                        ) : null}
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
