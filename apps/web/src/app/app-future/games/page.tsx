import { db, games, genres, eq, platforms } from '@kittr/db';
import { GameCard, H1 } from '@kittr/ui/new';

export async function Page() {
  const gamesData = await db.select().from(games);
  // .innerJoin(genres, eq(games.id, genres.id))
  // .innerJoin(platforms, eq(games.id, platforms.id));

  return <pre>{JSON.stringify(gamesData, null, 2)}</pre>;
  // return (
  //   <>
  //     <H1>Games</H1>
  //     {gamesData.map(({ Game: game, Genre: genre }) => {
  //       return (
  //         <>
  //           <p>test</p>
  //           <GameCard
  //             developer={game.developer}
  //             disabled={!game.active}
  //             genres={[genre.displayName]}
  //             key={game.id}
  //             platforms={[]}
  //             title={game.displayName}
  //           />
  //         </>
  //       );
  //     })}
  //   </>
  // );
}

export default Page;
