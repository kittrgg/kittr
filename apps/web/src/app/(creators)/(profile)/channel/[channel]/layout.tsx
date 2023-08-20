import '@/app/globals.css';

import { type ReactNode } from 'react';
import type { Metadata } from 'next';
import {
  AppShell,
  Avatar,
  AppShellLinkItem,
  SidebarSeparator,
  SidebarHeader,
} from '@kittr/ui/new';
import Link from 'next/link';
import { LayoutGrid, Users, Gamepad } from '@kittr/ui/icons';
import Image from 'next/image';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import { inter } from '@/app/fonts';
import type { Params } from '@/app/(creators)/(profile)/channel/[channel]/params';
import { getChannel } from '@/fetches/getChannel';
import { FooterImage, footerLinks } from '@/app/footer';

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

export async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { channel: string };
}) {
  const channel = await getChannel(params.channel);
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

              <SidebarHeader>Games</SidebarHeader>
              {channel?.games.map((game) => {
                return (
                  <AppShellLinkItem key={game.urlSafeName}>
                    <div className="flex flex-row items-center gap-4">
                      <Avatar
                        hasProfileImg
                        id={`${game.urlSafeName}/title-image.png`}
                        username={game.displayName}
                      />
                      <Link
                        href={`/channel/${params.channel}/${game.urlSafeName}`}
                      >
                        {game.displayName}
                      </Link>
                    </div>
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
