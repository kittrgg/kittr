import { db } from '@kittr/db';
import { GameCard, H1 } from '@kittr/ui/new';

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
      {gamesData
        .sort((x, y) => Number(y.active) - Number(x.active))
        .map(
          ({
            gameToGenres,
            gamesToPlatforms,
            developer,
            active,
            displayName,
            id,
          }) => {
            return (
              <GameCard
                developer={developer}
                disabled={!active}
                genres={gameToGenres.map((genre) => genre.genres.displayName)}
                key={id}
                platforms={gamesToPlatforms.map(
                  (platform) => platform.platforms.displayName,
                )}
                title={displayName}
              />
            );
          },
        )}
    </>
  );
}

export default Page;
