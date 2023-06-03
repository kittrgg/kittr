import {
  pgTable,
  pgEnum,
  uniqueIndex,
  text,
  boolean,
  integer,
  doublePrecision,
  timestamp,
  varchar,
  index,
} from 'drizzle-orm/pg-core';
import { games } from './tables/games';
import {
  gamesToGenres,
  gameGenresRelation,
  gamesToGenresRelations,
  genreGamesRelation,
  genres,
} from './tables/games/genres';
import {
  gamePlatformsRelation,
  gamesToPlatforms,
  gamesToPlatformsRelations,
  platformGamesRelation,
  platforms,
} from './tables/games/platforms';

export const adminRole = pgEnum('AdminRole', ['SUPER', 'DEFAULT']);
export const linkProperty = pgEnum('LinkProperty', [
  'TWITCH',
  'YOUTUBE',
  'INSTAGRAM',
  'TWITTER',
  'FACEBOOK',
  'DISCORD',
  'TIKTOK',
]);
export const channelPlanType = pgEnum('ChannelPlanType', ['PREMIUM', 'BASIC']);
export const channelBrandColorTypes = pgEnum('ChannelBrandColorTypes', [
  'PRIMARY',
  'SECONDARY',
  'ACCENT',
]);
export const channelManagerRoles = pgEnum('ChannelManagerRoles', [
  'OWNER',
  'ADMIN',
  'EDITOR',
]);

export const channelProfile = pgTable(
  'ChannelProfile',
  {
    id: text('id').primaryKey().notNull(),
    hasCoverPhoto: boolean('hasCoverPhoto').notNull(),
    hasProfileImage: boolean('hasProfileImage').notNull(),
    youtubeAutoplay: boolean('youtubeAutoplay').notNull(),
    channelId: text('channelId')
      .notNull()
      .references(() => channel.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
  },
  (table) => {
    return {
      channelIdKey: uniqueIndex('ChannelProfile_channelId_key').on(
        table.channelId,
      ),
    };
  },
);

export const setupPhoto = pgTable(
  'SetupPhoto',
  {
    id: text('id').primaryKey().notNull(),
    channelProfileId: text('channelProfileId')
      .notNull()
      .references(() => channelProfile.id, {
        onDelete: 'restrict',
        onUpdate: 'cascade',
      }),
    slot: integer('slot').notNull(),
    exists: boolean('exists').notNull(),
  },
  (table) => {
    return {
      channelProfileIdSlotKey: uniqueIndex(
        'SetupPhoto_channelProfileId_slot_key',
      ).on(table.channelProfileId, table.slot),
    };
  },
);

export const channelLink = pgTable('ChannelLink', {
  id: text('id').primaryKey().notNull(),
  property: linkProperty('property').notNull(),
  value: text('value').notNull(),
  channelId: text('channelId')
    .notNull()
    .references(() => channel.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
});

export const warzoneTwoKitOptionTuning = pgTable('WarzoneTwoKitOptionTuning', {
  id: text('id').primaryKey().notNull(),
  kitId: text('kitId')
    .notNull()
    .references(() => warzoneTwoKit.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
  kitOptionId: text('kitOptionId')
    .notNull()
    .references(() => warzoneTwoKitOption.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
  horz: doublePrecision('horz').notNull(),
  vert: doublePrecision('vert').notNull(),
});

export const channelPlan = pgTable(
  'ChannelPlan',
  {
    id: text('id').primaryKey().notNull(),
    stripeSubscriptionId: text('stripeSubscriptionId'),
    type: channelPlanType('type').default('BASIC').notNull(),
    channelId: text('channelId')
      .notNull()
      .references(() => channel.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
  },
  (table) => {
    return {
      channelIdKey: uniqueIndex('ChannelPlan_channelId_key').on(
        table.channelId,
      ),
    };
  },
);

export const channelPcSpec = pgTable('ChannelPcSpec', {
  id: text('id').primaryKey().notNull(),
  partType: text('partType').notNull(),
  partName: text('partName').notNull(),
  channelProfileId: text('channelProfileId')
    .notNull()
    .references(() => channelProfile.id, {
      onDelete: 'restrict',
      onUpdate: 'cascade',
    }),
});

export const warzoneTwoKitOption = pgTable('WarzoneTwoKitOption', {
  id: text('id').primaryKey().notNull(),
  gameId: text('gameId').notNull(),
  displayName: text('displayName').notNull(),
  slotKey: text('slotKey').notNull(),
  orderPlacement: integer('orderPlacement').notNull(),
  kitBaseId: text('kitBaseId')
    .notNull()
    .references(() => warzoneTwoKitBase.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
});

export const channel = pgTable(
  'Channel',
  {
    id: text('id').primaryKey().notNull(),
    createdAt: timestamp('createdAt', { precision: 3, mode: 'string' })
      .defaultNow()
      .notNull(),
    displayName: text('displayName').notNull(),
    urlSafeName: text('urlSafeName').notNull(),
    viewCount: integer('viewCount').notNull(),
    previousUpdater: text('previousUpdater'),
  },
  (table) => {
    return {
      displayNameKey: uniqueIndex('Channel_displayName_key').on(
        table.displayName,
      ),
      urlSafeNameKey: uniqueIndex('Channel_urlSafeName_key').on(
        table.urlSafeName,
      ),
    };
  },
);

export const channelAffiliate = pgTable('ChannelAffiliate', {
  id: text('id').primaryKey().notNull(),
  code: text('code'),
  description: text('description'),
  company: text('company'),
  url: text('url'),
  channelProfileId: text('channelProfileId').references(
    () => channelProfile.id,
    { onDelete: 'set null', onUpdate: 'cascade' },
  ),
});

export const warzoneTwoKitBaseCategory = pgTable(
  'WarzoneTwoKitBaseCategory',
  {
    id: text('id').primaryKey().notNull(),
    displayName: text('displayName').notNull(),
  },
  (table) => {
    return {
      displayNameKey: uniqueIndex(
        'WarzoneTwoKitBaseCategory_displayName_key',
      ).on(table.displayName),
    };
  },
);

export const warzoneTwoKit = pgTable('WarzoneTwoKit', {
  id: text('id').primaryKey().notNull(),
  customTitle: text('customTitle'),
  blueprint: text('blueprint'),
  featured: boolean('featured').notNull(),
  youtubeUrl: text('youtubeUrl'),
  tiktokUrl: text('tiktokUrl'),
  quote: text('quote'),
  gameId: text('gameId')
    .notNull()
    .references(() => games.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
  baseId: text('baseId')
    .notNull()
    .references(() => warzoneTwoKitBase.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
  channelId: text('channelId')
    .notNull()
    .references(() => channel.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
});

export const prismaMigrations = pgTable('_prisma_migrations', {
  id: varchar('id', { length: 36 }).primaryKey().notNull(),
  checksum: varchar('checksum', { length: 64 }).notNull(),
  finishedAt: timestamp('finished_at', { withTimezone: true, mode: 'string' }),
  migrationName: varchar('migration_name', { length: 255 }).notNull(),
  logs: text('logs'),
  rolledBackAt: timestamp('rolled_back_at', {
    withTimezone: true,
    mode: 'string',
  }),
  startedAt: timestamp('started_at', { withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  appliedStepsCount: integer('applied_steps_count').notNull(),
});

export const administrator = pgTable('Administrator', {
  id: text('id').primaryKey().notNull(),
  firebaseUserId: text('firebaseUserId').notNull(),
  role: adminRole('role').notNull(),
});

export const warzoneTwoCommandCode = pgTable('WarzoneTwoCommandCode', {
  id: text('id').primaryKey().notNull(),
  code: text('code').notNull(),
  kitBaseId: text('kitBaseId')
    .notNull()
    .references(() => warzoneTwoKitBase.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
});

export const warzoneTwoKitToWarzoneTwoKitOption = pgTable(
  '_WarzoneTwoKitToWarzoneTwoKitOption',
  {
    a: text('A')
      .notNull()
      .references(() => warzoneTwoKit.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
    b: text('B')
      .notNull()
      .references(() => warzoneTwoKitOption.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
  },
  (table) => {
    return {
      abUnique: uniqueIndex('_WarzoneTwoKitToWarzoneTwoKitOption_AB_unique').on(
        table.a,
        table.b,
      ),
      bIdx: index().on(table.b),
    };
  },
);

export const channelBrandColor = pgTable('ChannelBrandColor', {
  id: text('id').primaryKey().notNull(),
  type: channelBrandColorTypes('type').notNull(),
  value: text('value').notNull(),
  channelProfileId: text('channelProfileId').references(
    () => channelProfile.id,
    { onDelete: 'set null', onUpdate: 'cascade' },
  ),
});

export const warzoneTwoKitBase = pgTable('WarzoneTwoKitBase', {
  id: text('id').primaryKey().notNull(),
  displayName: text('displayName').notNull(),
  gameId: text('gameId')
    .notNull()
    .references(() => games.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
  imageUrl: text('imageUrl').notNull(),
  blurb: text('blurb').notNull(),
  maxOptions: integer('maxOptions').notNull(),
  categoryId: text('categoryId')
    .notNull()
    .references(() => warzoneTwoKitBaseCategory.id, {
      onDelete: 'restrict',
      onUpdate: 'cascade',
    }),
});

export const channelManager = pgTable('ChannelManager', {
  id: text('id').primaryKey().notNull(),
  firebaseId: text('firebaseId').notNull(),
  role: channelManagerRoles('role').notNull(),
  channelId: text('channelId')
    .notNull()
    .references(() => channel.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
});

export const warzoneKit = pgTable('WarzoneKit', {
  id: text('id').primaryKey().notNull(),
  customTitle: text('customTitle'),
  blueprint: text('blueprint'),
  featured: boolean('featured').notNull(),
  youtubeUrl: text('youtubeUrl'),
  tiktokUrl: text('tiktokUrl'),
  quote: text('quote'),
  gameId: text('gameId')
    .notNull()
    .references(() => games.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
  baseId: text('baseId')
    .notNull()
    .references(() => warzoneKitBase.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
  channelId: text('channelId')
    .notNull()
    .references(() => channel.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
});

export const warzoneKitBase = pgTable('WarzoneKitBase', {
  id: text('id').primaryKey().notNull(),
  displayName: text('displayName').notNull(),
  gameId: text('gameId')
    .notNull()
    .references(() => games.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
  imageUrl: text('imageUrl').notNull(),
  blurb: text('blurb').notNull(),
  maxOptions: integer('maxOptions').notNull(),
  categoryId: text('categoryId')
    .notNull()
    .references(() => warzoneKitBaseCategory.id, {
      onDelete: 'restrict',
      onUpdate: 'cascade',
    }),
});

export const warzoneKitOption = pgTable('WarzoneKitOption', {
  id: text('id').primaryKey().notNull(),
  gameId: text('gameId').notNull(),
  displayName: text('displayName').notNull(),
  slotKey: text('slotKey').notNull(),
  orderPlacement: integer('orderPlacement').notNull(),
  kitBaseId: text('kitBaseId')
    .notNull()
    .references(() => warzoneKitBase.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
});

export const channelCustomGameCommand = pgTable('ChannelCustomGameCommand', {
  id: text('id').primaryKey().notNull(),
  command: text('command').notNull(),
  gameId: text('gameId')
    .notNull()
    .references(() => games.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
  channelId: text('channelId')
    .notNull()
    .references(() => channel.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
});

export const channelToGame = pgTable(
  '_ChannelToGame',
  {
    a: text('A')
      .notNull()
      .references(() => channel.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
    b: text('B')
      .notNull()
      .references(() => games.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  },
  (table) => {
    return {
      abUnique: uniqueIndex('_ChannelToGame_AB_unique').on(table.a, table.b),
      bIdx: index().on(table.b),
    };
  },
);

export const channelCreatorCode = pgTable('ChannelCreatorCode', {
  id: text('id').primaryKey().notNull(),
  channelId: text('channelId')
    .notNull()
    .references(() => channel.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  gameId: text('gameId')
    .notNull()
    .references(() => games.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
  code: text('code').notNull(),
});

export const warzoneKitBaseCategory = pgTable(
  'WarzoneKitBaseCategory',
  {
    id: text('id').primaryKey().notNull(),
    displayName: text('displayName').notNull(),
  },
  (table) => {
    return {
      displayNameKey: uniqueIndex('WarzoneKitBaseCategory_displayName_key').on(
        table.displayName,
      ),
    };
  },
);

export const warzoneKitToWarzoneKitOption = pgTable(
  '_WarzoneKitToWarzoneKitOption',
  {
    a: text('A')
      .notNull()
      .references(() => warzoneKit.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
    b: text('B')
      .notNull()
      .references(() => warzoneKitOption.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
  },
  (table) => {
    return {
      abUnique: uniqueIndex('_WarzoneKitToWarzoneKitOption_AB_unique').on(
        table.a,
        table.b,
      ),
      bIdx: index().on(table.b),
    };
  },
);

export const warzoneCommandCode = pgTable('WarzoneCommandCode', {
  id: text('id').primaryKey().notNull(),
  code: text('code').notNull(),
  kitBaseId: text('kitBaseId')
    .notNull()
    .references(() => warzoneKitBase.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
});

export const channelKitOverlay = pgTable(
  'ChannelKitOverlay',
  {
    id: text('id').primaryKey().notNull(),
    channelId: text('channelId')
      .notNull()
      .references(() => channel.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
    backgroundColorPrimary: text('backgroundColorPrimary'),
    backgroundColorSecondary: text('backgroundColorSecondary'),
    textColorPrimary: text('textColorPrimary'),
    textColorSecondary: text('textColorSecondary'),
    textColorAccent: text('textColorAccent'),
    isOverlayVisible: boolean('isOverlayVisible').notNull(),
    primaryWzTwoKitId: text('primaryWzTwoKitId').references(
      () => warzoneTwoKit.id,
      { onDelete: 'set null', onUpdate: 'cascade' },
    ),
    secondaryWzTwoKitId: text('secondaryWzTwoKitId').references(
      () => warzoneTwoKit.id,
      { onDelete: 'set null', onUpdate: 'cascade' },
    ),
  },
  (table) => {
    return {
      channelIdKey: uniqueIndex('ChannelKitOverlay_channelId_key').on(
        table.channelId,
      ),
      primaryWzTwoKitIdKey: uniqueIndex(
        'ChannelKitOverlay_primaryWzTwoKitId_key',
      ).on(table.primaryWzTwoKitId),
      secondaryWzTwoKitIdKey: uniqueIndex(
        'ChannelKitOverlay_secondaryWzTwoKitId_key',
      ).on(table.secondaryWzTwoKitId),
    };
  },
);

export { games };

export const schema = {
  administrator,
  channel,
  channelAffiliate,
  channelBrandColor,
  channelCreatorCode,
  channelCustomGameCommand,
  channelKitOverlay,
  channelLink,
  channelManager,
  channelPcSpec,
  channelPlan,
  channelProfile,
  channelToGame,
  gameGenresRelation,
  genreGamesRelation,
  gamePlatformsRelation,
  games,
  gamesToGenres,
  gamesToGenresRelations,
  gamesToPlatforms,
  gamesToPlatformsRelations,
  genres,
  platformGamesRelation,
  platforms,
  setupPhoto,
  warzoneCommandCode,
  warzoneKitBaseCategory,
  warzoneKitOption,
  warzoneKitToWarzoneKitOption,
  warzoneTwoCommandCode,
  warzoneTwoKit,
  warzoneTwoKitBase,
  warzoneTwoKitBaseCategory,
  warzoneTwoKitOption,
  warzoneTwoKitOptionTuning,
  warzoneTwoKitToWarzoneTwoKitOption,
};
