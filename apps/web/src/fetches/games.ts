import type { Game, Genre, Platform } from '@kittr/db';
import { db } from '@kittr/db';

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
