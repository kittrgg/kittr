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
      <pre>{JSON.stringify(gamesData, null, 2)}</pre>
      <H1>Games</H1>
      {/* {gamesData.map(({ gameToGenres, developer, active, displayName, id }) => {
        return (
          <GameCard
            developer={developer}
            disabled={!active}
            genres={gameToGenres.map((genre) => genre.genres.displayName)}
            key={id}
            platforms={[]}
            title={displayName}
          />
        );
      })} */}
    </>
  );
}

export default Page;
