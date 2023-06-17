import { ChannelList, H1 } from '@kittr/ui/new';
import { notFound } from 'next/navigation';
import { download } from '@kittr/firebase/storage';
import Link from 'next/link';
import { Suspense } from 'react';
import { ChevronLeft, ChevronRight } from '@kittr/ui/icons';
import type { Metadata } from 'next';
import { countChannels } from '@/fetches/countChannels';
import { getPaginatedChannels } from '@/fetches/getPaginatedChannels';

const CHANNELS_PER_PAGE = 12;
interface Params {
  params: { pageNumber: string };
}

export const revalidate = 60;
export function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({ pageNumber: String(i + 1) }));
}

export function generateMetadata({ params }: Params): Metadata {
  return {
    title: `Channels - Page ${params.pageNumber} | kittr`,
    description: 'Find your next favorite creator on kittr.',
  };
}

async function Page({ params }: Params) {
  const pageNumber = Number(params.pageNumber);

  if (isNaN(pageNumber) || pageNumber < 1) {
    return notFound();
  }

  const { count } = await countChannels();
  const channels = await getPaginatedChannels({
    take: CHANNELS_PER_PAGE,
    skip: (Number(params.pageNumber) - 1) * CHANNELS_PER_PAGE,
  });

  if (channels.length === 0) {
    return notFound();
  }

  const totalPages = count / CHANNELS_PER_PAGE;

  const channelsWithImages = await Promise.all(
    channels.map(async (channel) => ({
      ...channel,
      imageSrc: await download(channel.id),
    })),
  );

  return (
    <div className="flex flex-col gap-6">
      <H1>Channels</H1>
      <p>
        Select a channel to view their page with their games and featured kits.
      </p>
      <Suspense>
        <ChannelList
          channels={channelsWithImages.map((channel) => ({
            id: channel.id,
            imageSrc: channel.imageSrc,
            name: channel.displayName,
            urlSafeName: channel.urlSafeName,
          }))}
          disableResponsive
          linkBasePath="/channel"
          linkComponent={Link}
        />
      </Suspense>

      <p className="font-semibold text-center">
        {pageNumber * CHANNELS_PER_PAGE - CHANNELS_PER_PAGE + 1} -{' '}
        {pageNumber * CHANNELS_PER_PAGE - CHANNELS_PER_PAGE + CHANNELS_PER_PAGE}{' '}
        of {count} channels
      </p>
      <div className="flex flex-row justify-center gap-6">
        {pageNumber > 1 ? (
          <Link
            className="flex flex-row hover:underline"
            href={`/channels/${pageNumber - 1}`}
          >
            <ChevronLeft /> Back
          </Link>
        ) : null}
        {pageNumber < totalPages ? (
          <Link
            className="flex flex-row hover:underline"
            href={`/channels/${pageNumber + 1}`}
          >
            Next <ChevronRight />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Page;