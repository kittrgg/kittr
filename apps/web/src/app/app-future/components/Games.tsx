import { GameCard, H2 } from '@kittr/ui/new';
import { download } from '@kittr/firebase/storage';
import { listGames } from '@/fetches/games';

export async function Games() {
  const allGames = await listGames();
  const activeGames = allGames.filter((game) => game.active);

  return (
    <section>
      <H2>Games</H2>
      {activeGames.map(async (game) => {
        return (
          <GameCard
            developer={game.developer}
            genres={game.gameToGenres.map((elem) => elem.genres.displayName)}
            imageProps={{
              src: await download(game.titleImageUrl),
              alt: `${game.displayName} cover art`,
            }}
            key={game.id}
            platforms={game.gameToPlatforms.map(
              (elem) => elem.platforms.displayName,
            )}
            title={game.displayName}
          />
        );
      })}
    </section>
  );
}
