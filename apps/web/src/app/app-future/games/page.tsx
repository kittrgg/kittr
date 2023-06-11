// Need these while Drizzle sorts themselves out.
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { db } from '@kittr/db';
import type { Genre, Platform } from '@kittr/db';
import { download } from '@kittr/firebase/storage';
import { GameCard, H1 } from '@kittr/ui/new';
import Link from 'next/link';

export async function Page() {
  const gamesData = await db.query.games.findMany({
    with: {
      gamesToPlatforms: {
        with: {
          platforms: true,
        },
      },
      gameToGenres: {
        with: {
          genres: true,
        },
      },
    },
  });

  return (
    <>
      <H1>Games</H1>
      <div className="flex flex-row flex-wrap justify-center">
        {gamesData
          .sort((x, y) => Number(y.active) - Number(x.active))
          .map(
            async ({
              // @ts-expect-error Drizzle is being wonky.
              gameToGenres,
              // @ts-expect-error Drizzle is being wonky.
              gamesToPlatforms,
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
                  platforms={gamesToPlatforms.map(
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
