import { prisma } from '@kittr/prisma';
import type { Metadata } from 'next';
import { CreatorList, H1 } from '@kittr/ui/new';
import { download } from '@kittr/firebase/storage';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from '@kittr/ui/icons';
import { notFound } from 'next/navigation';
import { countChannels } from '@/fetches/countChannels';
import { getGameDisplayNameFromUrlSafeName, listGames } from '@/fetches/games';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';

const CHANNELS_PER_PAGE = 12;
interface Params {
  pageNumber: string;
  game: string;
}

export async function generateStaticParams() {
  const games = await listGames();
  return games.map((game) =>
    Array.from({ length: 10 }, (_, i) => ({
      game: game.urlSafeName,
      pageNumber: String(i + 1),
    })),
  );
}

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const game = await getGameDisplayNameFromUrlSafeName(params.game);

  return generateKittrMetadata({
    title: `${game.displayName} - Page ${params.pageNumber}`,
    description: 'Find your favorite creators on kittr.',
    canonicalURL: `/games/${params.game}/${params.pageNumber}`,
  });
};

const Page = async ({ params }: { params: Params }) => {
  const pageNumber = Number(params.pageNumber);

  if (isNaN(pageNumber) || pageNumber < 1) {
    return notFound();
  }
  const count = await countChannels();

  const channels = await prisma.channel.findMany({
    where: {
      games: {
        some: {
          urlSafeName: params.game,
        },
      },
    },
    take: CHANNELS_PER_PAGE,
    skip: (Number(params.pageNumber) - 1) * CHANNELS_PER_PAGE,
    include: {
      profile: true,
    },
    orderBy: {
      viewCount: 'desc',
    },
  });

  const totalPages = count / CHANNELS_PER_PAGE;

  const channelsWithImages = await Promise.all(
    channels.map(async (channel) => ({
      ...channel,
      imageSrc: await download(channel.id),
    })),
  );

  const game = await getGameDisplayNameFromUrlSafeName(params.game);

  return (
    <div className="flex flex-col gap-6">
      <H1>Channels</H1>
      <p>Find your favorite creators playing {game.displayName}.</p>
      <CreatorList
        creators={channelsWithImages.map((channel) => ({
          id: channel.id,
          imageSrc: channel.imageSrc,
          hasAvatar: channel.profile?.hasProfileImage ?? false,
          name: channel.displayName,
          urlSafeName: channel.urlSafeName,
        }))}
        disableResponsive
        linkBasePath="/channel"
        linkComponent={Link}
      />

      <p className="font-semibold text-center">
        {pageNumber * CHANNELS_PER_PAGE - CHANNELS_PER_PAGE + 1} -{' '}
        {pageNumber * CHANNELS_PER_PAGE - CHANNELS_PER_PAGE + CHANNELS_PER_PAGE}{' '}
        of {count} channels
      </p>
      <div className="flex flex-row justify-center gap-6">
        {pageNumber > 1 ? (
          <Link
            className="flex flex-row hover:underline"
            href={`/games/${game.urlSafeName}/${pageNumber - 1}`}
          >
            <ChevronLeft /> Back
          </Link>
        ) : null}
        {pageNumber < totalPages ? (
          <Link
            className="flex flex-row hover:underline"
            href={`/games/${game.urlSafeName}/${pageNumber + 1}`}
          >
            Next <ChevronRight />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Page;
