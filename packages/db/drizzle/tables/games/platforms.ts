import { relations } from 'drizzle-orm';
import { pgTable, text, uniqueIndex, index } from 'drizzle-orm/pg-core';
import { games } from '.';

export const platforms = pgTable(
  'Platform',
  {
    id: text('id').primaryKey().notNull(),
    displayName: text('displayName').notNull(),
  },
  (table) => {
    return {
      displayNameKey: uniqueIndex('Platform_displayName_key').on(
        table.displayName,
      ),
    };
  },
);

// This table was generated from the Prisma -> Drizzle migration.
// Apologies for the illegibility.
export const gamesToPlatforms = pgTable(
  '_GameToPlatform',
  {
    gameId: text('A')
      .notNull()
      .references(() => games.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    platformId: text('B')
      .notNull()
      .references(() => platforms.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
  },
  (table) => {
    return {
      abUnique: uniqueIndex('_GameToPlatform_AB_unique').on(
        table.gameId,
        table.platformId,
      ),
      bIdx: index().on(table.platformId),
    };
  },
);

// Putting multiple many-to-manys in breaks it D:

export const gamePlatformsRelation = relations(games, ({ many }) => ({
  gameToPlatforms: many(gamesToPlatforms),
}));

export const platformGamesRelation = relations(platforms, ({ many }) => ({
  platformToGames: many(gamesToPlatforms),
}));

export const gamesToPlatformsRelations = relations(
  gamesToPlatforms,
  ({ one }) => ({
    games: one(games, {
      fields: [gamesToPlatforms.gameId],
      references: [games.id],
    }),
    platforms: one(platforms, {
      fields: [gamesToPlatforms.platformId],
      references: [platforms.id],
    }),
  }),
);
