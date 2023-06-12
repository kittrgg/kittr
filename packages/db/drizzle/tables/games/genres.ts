import { relations } from 'drizzle-orm';
import { pgTable, text, uniqueIndex, index } from 'drizzle-orm/pg-core';
import { games } from '.';

export const genres = pgTable(
  'Genre',
  {
    id: text('id').primaryKey().notNull(),
    displayName: text('displayName').notNull(),
  },
  (table) => {
    return {
      displayNameKey: uniqueIndex('Genre_displayName_key').on(
        table.displayName,
      ),
    };
  },
);

// This table was generated from the Prisma -> Drizzle migration.
// Apologies for the illegibility.
export const gamesToGenres = pgTable(
  '_GameToGenre',
  {
    gameId: text('A')
      .notNull()
      .references(() => games.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    genreId: text('B')
      .notNull()
      .references(() => genres.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
  },
  (table) => {
    return {
      abUnique: uniqueIndex('_GameToGenre_AB_unique').on(
        table.gameId,
        table.genreId,
      ),
      bIdx: index().on(table.genreId),
    };
  },
);

export const gameGenresRelation = relations(games, ({ many }) => ({
  gameToGenres: many(gamesToGenres),
}));

export const genreGamesRelation = relations(genres, ({ many }) => ({
  genreToGames: many(gamesToGenres),
}));

export const gamesToGenresRelations = relations(gamesToGenres, ({ one }) => ({
  games: one(games, {
    fields: [gamesToGenres.gameId],
    references: [games.id],
  }),
  genres: one(genres, {
    fields: [gamesToGenres.genreId],
    references: [genres.id],
  }),
}));
