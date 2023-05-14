// <PageWrapper /> and <AdPageWrapper /> should end up getting molded into one component probably.
// It should probably be that <AdPageWrapper /> has a "noAds" option on it.
import Head from '@Components/shared/Head';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AppShell as KittrAppShell,
} from '@kittr/ui/new';
import type { ReactNode } from 'react';
import { ErrorBoundary } from '@Components/shared/ErrorBoundary';
import { Title } from '@kittr/ui';
import Link from 'next/link';
import LogoImage from './NavMenu/LogoImageLink';
import Footer from './Footer';
import { Routes } from '@/utils/lookups/routes';
import { useUser } from '@/hooks/useUser';

interface Props {
  /** Head title for meta information */
  title: string;
  /** Head description for meta information */
  description: string;
  /** React children to render for content of page. */
  children: ReactNode;
  /** Title used in the H1 tag for the page */
  pageTitle?: string;
}

/** Standardized page wrapper for general use. Does not contain ad units. */
function PageWrapper({ title, description, children, pageTitle }: Props) {
  const user = useUser();
  return (
    <>
      <Head description={description} title={title} />
      <KittrAppShell
        nav={
          <>
            <div className="mx-10 my-8">
              <LogoImage />
            </div>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-700"
                  href={Routes.DASHBOARD}
                >
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-700"
                  href={Routes.GAMES.LIST}
                >
                  <span className="ml-3">Games</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-700"
                  href={Routes.CHANNEL.LIST}
                >
                  <span className="ml-3">Channels</span>
                </Link>
              </li>
            </ul>
            {user ? (
              <div className="absolute bottom-0 left-4 right-4">
                <div className="flex w-full flex-row border-t-2 py-4">
                  <Avatar key="avatar">
                    <AvatarImage alt={user.displayName} src={user.photoURL} />
                    <AvatarFallback>{user.displayName}</AvatarFallback>
                  </Avatar>
                  <div className="m-2 ml-4 flex-1">{user.displayName}</div>
                </div>
              </div>
            ) : null}
          </>
        }
      >
        <Title order={1} preset="h1" sx={{ marginBottom: '1rem' }}>
          {pageTitle}
        </Title>
        <ErrorBoundary>{children}</ErrorBoundary>

        <Footer />
      </KittrAppShell>
    </>
  );
}

export default PageWrapper;
