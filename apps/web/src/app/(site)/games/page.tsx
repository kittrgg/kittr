import type { Genre, Platform } from '@kittr/db';
import { download } from '@kittr/firebase/storage';
import { GameCard, H1 } from '@kittr/ui/new';
import Link from 'next/link';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import { listGames } from '@/fetches/games';

export const generateMetadata = () =>
  generateKittrMetadata({
    title: 'Games',
    description: 'Find your favorite game on kittr.',
    canonicalURL: '/games',
  });

export async function Page() {
  const gamesData = await listGames();

  return (
    <>
      <H1>Games</H1>
      <div className="flex flex-row flex-wrap justify-center">
        {gamesData
          .sort((x, y) => Number(y.active) - Number(x.active))
          .map(
            async ({
              gameToGenres,
              gameToPlatforms,
              developer,
              active,
              titleImageUrl,
              urlSafeName,
              displayName,
              id,
            }) => {
              return (
                <GameCard
                  developer={developer}
                  disabled={!active}
                  genres={gameToGenres.map(
                    (genre: { genres: Genre }) => genre.genres.displayName,
                  )}
                  href={`/games/${urlSafeName}`}
                  imageProps={{
                    src: await download(titleImageUrl),
                    alt: `${displayName} cover art`,
                  }}
                  key={id}
                  linkComponent={Link}
                  platforms={gameToPlatforms.map(
                    (platform: { platforms: Platform }) =>
                      platform.platforms.displayName,
                  )}
                  title={displayName}
                />
              );
            },
          )}
      </div>
    </>
  );
}

export default Page;
