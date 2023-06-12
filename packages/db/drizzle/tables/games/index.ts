import { pgTable, text, boolean, timestamp } from 'drizzle-orm/pg-core';

export const games = pgTable('Game', {
  id: text('id').primaryKey().notNull(),
  displayName: text('displayName').notNull(),
  urlSafeName: text('urlSafeName').notNull(),
  backgroundImageUrl: text('backgroundImageUrl').notNull(),
  titleImageUrl: text('titleImageUrl').notNull(),
  active: boolean('active').notNull(),
  blurDataUrl: text('blurDataUrl').notNull(),
  developer: text('developer').notNull(),
  releaseDate: timestamp('releaseDate', {
    precision: 3,
    mode: 'string',
  }).notNull(),
});
