import { GameCard, H2 } from '@kittr/ui/new';
import { download } from '@kittr/firebase/storage';
import Link from 'next/link';
import { listGames } from '@/fetches/games';

export async function Games() {
  const allGames = await listGames();
  const activeGames = allGames.filter((game) => game.active);
  const gamesWithImage = await Promise.all(
    activeGames.map(async (game) => ({
      ...game,
      titleImageUrl: await download(game.titleImageUrl),
    })),
  );

  return (
    <section>
      <H2>Games</H2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-6">
        {gamesWithImage.map((game) => {
          return (
            <GameCard
              developer={game.developer}
              genres={game.genres.map((genre) => genre.displayName)}
              href={`/games/${game.urlSafeName}`}
              imageProps={{
                src: game.titleImageUrl,
                alt: `${game.displayName} cover art`,
              }}
              key={game.id}
              linkComponent={Link}
              platforms={game.platforms.map((platform) => platform.displayName)}
              title={game.displayName}
            />
          );
        })}
      </div>
    </section>
  );
}
