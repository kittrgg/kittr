import type { Game, Genre, Platform } from '@kittr/db';
import { db, eq, games } from '@kittr/db';

// I'm having to make this type myself
// because Drizzle isn't inferring correctly
interface GamesWithPlatformsAndGenres extends Game {
  gameToGenres: { genres: Genre }[];
  gameToPlatforms: { platforms: Platform }[];
}

export const listGames = async (): Promise<GamesWithPlatformsAndGenres[]> => {
  const gamesData = (await db.query.games.findMany({
    with: {
      gameToPlatforms: {
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

    // I'm having to make this type myself
    // because Drizzle isn't inferring correctly
  })) as GamesWithPlatformsAndGenres[];

  return gamesData;
};

export const getGameDisplayNameFromUrlSafeName = (urlSafeName: string) =>
  db
    .select()
    .from(games)
    .where(eq(games.urlSafeName, urlSafeName))
    .then((res) => res[0]);
