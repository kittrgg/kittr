-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
DO $$ BEGIN
 CREATE TYPE "AdminRole" AS ENUM('SUPER', 'DEFAULT');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "LinkProperty" AS ENUM('TWITCH', 'YOUTUBE', 'INSTAGRAM', 'TWITTER', 'FACEBOOK', 'DISCORD', 'TIKTOK');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "ChannelPlanType" AS ENUM('PREMIUM', 'BASIC');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "ChannelBrandColorTypes" AS ENUM('PRIMARY', 'SECONDARY', 'ACCENT');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "ChannelManagerRoles" AS ENUM('OWNER', 'ADMIN', 'EDITOR');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "ChannelProfile" (
	"id" text PRIMARY KEY NOT NULL,
	"hasCoverPhoto" boolean DEFAULT false NOT NULL,
	"hasProfileImage" boolean DEFAULT false NOT NULL,
	"youtubeAutoplay" boolean DEFAULT false NOT NULL,
	"channelId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "SetupPhoto" (
	"id" text PRIMARY KEY NOT NULL,
	"channelProfileId" text NOT NULL,
	"slot" integer NOT NULL,
	"exists" boolean NOT NULL
);

CREATE TABLE IF NOT EXISTS "ChannelLink" (
	"id" text PRIMARY KEY NOT NULL,
	"property" LinkProperty NOT NULL,
	"value" text NOT NULL,
	"channelId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "WarzoneTwoKitOptionTuning" (
	"id" text PRIMARY KEY NOT NULL,
	"kitId" text NOT NULL,
	"kitOptionId" text NOT NULL,
	"horz" double precision DEFAULT 0 NOT NULL,
	"vert" double precision DEFAULT 0 NOT NULL
);

CREATE TABLE IF NOT EXISTS "ChannelPlan" (
	"id" text PRIMARY KEY NOT NULL,
	"stripeSubscriptionId" text,
	"type" ChannelPlanType DEFAULT 'BASIC' NOT NULL,
	"channelId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "ChannelPcSpec" (
	"id" text PRIMARY KEY NOT NULL,
	"partType" text NOT NULL,
	"partName" text NOT NULL,
	"channelProfileId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "WarzoneTwoKitOption" (
	"id" text PRIMARY KEY NOT NULL,
	"gameId" text NOT NULL,
	"displayName" text NOT NULL,
	"slotKey" text NOT NULL,
	"orderPlacement" integer NOT NULL,
	"kitBaseId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "Channel" (
	"id" text PRIMARY KEY NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"displayName" text NOT NULL,
	"urlSafeName" text NOT NULL,
	"viewCount" integer DEFAULT 0 NOT NULL,
	"previousUpdater" text
);

CREATE TABLE IF NOT EXISTS "ChannelAffiliate" (
	"id" text PRIMARY KEY NOT NULL,
	"code" text,
	"description" text,
	"company" text,
	"url" text,
	"channelProfileId" text
);

CREATE TABLE IF NOT EXISTS "WarzoneTwoKitBaseCategory" (
	"id" text PRIMARY KEY NOT NULL,
	"displayName" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "WarzoneTwoKit" (
	"id" text PRIMARY KEY NOT NULL,
	"customTitle" text,
	"blueprint" text,
	"featured" boolean DEFAULT false NOT NULL,
	"youtubeUrl" text,
	"tiktokUrl" text,
	"quote" text,
	"gameId" text NOT NULL,
	"baseId" text NOT NULL,
	"channelId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"checksum" varchar(64) NOT NULL,
	"finished_at" timestamp with time zone,
	"migration_name" varchar(255) NOT NULL,
	"logs" text,
	"rolled_back_at" timestamp with time zone,
	"started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"applied_steps_count" integer DEFAULT 0 NOT NULL
);

CREATE TABLE IF NOT EXISTS "Administrator" (
	"id" text PRIMARY KEY NOT NULL,
	"firebaseUserId" text NOT NULL,
	"role" AdminRole NOT NULL
);

CREATE TABLE IF NOT EXISTS "WarzoneTwoCommandCode" (
	"id" text PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"kitBaseId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "_WarzoneTwoKitToWarzoneTwoKitOption" (
	"A" text NOT NULL,
	"B" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "ChannelBrandColor" (
	"id" text PRIMARY KEY NOT NULL,
	"type" ChannelBrandColorTypes NOT NULL,
	"value" text NOT NULL,
	"channelProfileId" text
);

CREATE TABLE IF NOT EXISTS "WarzoneTwoKitBase" (
	"id" text PRIMARY KEY NOT NULL,
	"displayName" text NOT NULL,
	"gameId" text NOT NULL,
	"imageUrl" text NOT NULL,
	"blurb" text NOT NULL,
	"maxOptions" integer NOT NULL,
	"categoryId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "ChannelManager" (
	"id" text PRIMARY KEY NOT NULL,
	"firebaseId" text NOT NULL,
	"role" ChannelManagerRoles NOT NULL,
	"channelId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "WarzoneKit" (
	"id" text PRIMARY KEY NOT NULL,
	"customTitle" text,
	"blueprint" text,
	"featured" boolean DEFAULT false NOT NULL,
	"youtubeUrl" text,
	"tiktokUrl" text,
	"quote" text,
	"gameId" text NOT NULL,
	"baseId" text NOT NULL,
	"channelId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "WarzoneKitBase" (
	"id" text PRIMARY KEY NOT NULL,
	"displayName" text NOT NULL,
	"gameId" text NOT NULL,
	"imageUrl" text NOT NULL,
	"blurb" text NOT NULL,
	"maxOptions" integer NOT NULL,
	"categoryId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "Game" (
	"id" text PRIMARY KEY NOT NULL,
	"displayName" text NOT NULL,
	"urlSafeName" text NOT NULL,
	"backgroundImageUrl" text NOT NULL,
	"titleImageUrl" text NOT NULL,
	"active" boolean NOT NULL,
	"blurDataUrl" text NOT NULL,
	"developer" text NOT NULL,
	"releaseDate" timestamp(3) NOT NULL
);

CREATE TABLE IF NOT EXISTS "WarzoneKitOption" (
	"id" text PRIMARY KEY NOT NULL,
	"gameId" text NOT NULL,
	"displayName" text NOT NULL,
	"slotKey" text NOT NULL,
	"orderPlacement" integer NOT NULL,
	"kitBaseId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "ChannelCustomGameCommand" (
	"id" text PRIMARY KEY NOT NULL,
	"command" text NOT NULL,
	"gameId" text NOT NULL,
	"channelId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "_ChannelToGame" (
	"A" text NOT NULL,
	"B" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "ChannelCreatorCode" (
	"id" text PRIMARY KEY NOT NULL,
	"channelId" text NOT NULL,
	"gameId" text NOT NULL,
	"code" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "_GameToGenre" (
	"A" text NOT NULL,
	"B" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "WarzoneKitBaseCategory" (
	"id" text PRIMARY KEY NOT NULL,
	"displayName" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "_WarzoneKitToWarzoneKitOption" (
	"A" text NOT NULL,
	"B" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "WarzoneCommandCode" (
	"id" text PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"kitBaseId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "Genre" (
	"id" text PRIMARY KEY NOT NULL,
	"displayName" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "_GameToPlatform" (
	"A" text NOT NULL,
	"B" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "ChannelKitOverlay" (
	"id" text PRIMARY KEY NOT NULL,
	"channelId" text NOT NULL,
	"backgroundColorPrimary" text,
	"backgroundColorSecondary" text,
	"textColorPrimary" text,
	"textColorSecondary" text,
	"textColorAccent" text,
	"isOverlayVisible" boolean DEFAULT false NOT NULL,
	"primaryWzTwoKitId" text,
	"secondaryWzTwoKitId" text
);

CREATE TABLE IF NOT EXISTS "Platform" (
	"id" text PRIMARY KEY NOT NULL,
	"displayName" text NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS "ChannelProfile_channelId_key" ON "ChannelProfile" ("channelId");
CREATE UNIQUE INDEX IF NOT EXISTS "SetupPhoto_channelProfileId_slot_key" ON "SetupPhoto" ("channelProfileId","slot");
CREATE UNIQUE INDEX IF NOT EXISTS "ChannelPlan_channelId_key" ON "ChannelPlan" ("channelId");
CREATE UNIQUE INDEX IF NOT EXISTS "Channel_displayName_key" ON "Channel" ("displayName");
CREATE UNIQUE INDEX IF NOT EXISTS "Channel_urlSafeName_key" ON "Channel" ("urlSafeName");
CREATE UNIQUE INDEX IF NOT EXISTS "WarzoneTwoKitBaseCategory_displayName_key" ON "WarzoneTwoKitBaseCategory" ("displayName");
CREATE UNIQUE INDEX IF NOT EXISTS "_WarzoneTwoKitToWarzoneTwoKitOption_AB_unique" ON "_WarzoneTwoKitToWarzoneTwoKitOption" ("A","B");
CREATE INDEX IF NOT EXISTS "_WarzoneTwoKitToWarzoneTwoKitOption_B_index" ON "_WarzoneTwoKitToWarzoneTwoKitOption" ("B");
CREATE UNIQUE INDEX IF NOT EXISTS "_ChannelToGame_AB_unique" ON "_ChannelToGame" ("A","B");
CREATE INDEX IF NOT EXISTS "_ChannelToGame_B_index" ON "_ChannelToGame" ("B");
CREATE UNIQUE INDEX IF NOT EXISTS "_GameToGenre_AB_unique" ON "_GameToGenre" ("A","B");
CREATE INDEX IF NOT EXISTS "_GameToGenre_B_index" ON "_GameToGenre" ("B");
CREATE UNIQUE INDEX IF NOT EXISTS "WarzoneKitBaseCategory_displayName_key" ON "WarzoneKitBaseCategory" ("displayName");
CREATE UNIQUE INDEX IF NOT EXISTS "_WarzoneKitToWarzoneKitOption_AB_unique" ON "_WarzoneKitToWarzoneKitOption" ("A","B");
CREATE INDEX IF NOT EXISTS "_WarzoneKitToWarzoneKitOption_B_index" ON "_WarzoneKitToWarzoneKitOption" ("B");
CREATE UNIQUE INDEX IF NOT EXISTS "Genre_displayName_key" ON "Genre" ("displayName");
CREATE UNIQUE INDEX IF NOT EXISTS "_GameToPlatform_AB_unique" ON "_GameToPlatform" ("A","B");
CREATE INDEX IF NOT EXISTS "_GameToPlatform_B_index" ON "_GameToPlatform" ("B");
CREATE UNIQUE INDEX IF NOT EXISTS "ChannelKitOverlay_channelId_key" ON "ChannelKitOverlay" ("channelId");
CREATE UNIQUE INDEX IF NOT EXISTS "ChannelKitOverlay_primaryWzTwoKitId_key" ON "ChannelKitOverlay" ("primaryWzTwoKitId");
CREATE UNIQUE INDEX IF NOT EXISTS "ChannelKitOverlay_secondaryWzTwoKitId_key" ON "ChannelKitOverlay" ("secondaryWzTwoKitId");
CREATE UNIQUE INDEX IF NOT EXISTS "Platform_displayName_key" ON "Platform" ("displayName");
DO $$ BEGIN
 ALTER TABLE "ChannelProfile" ADD CONSTRAINT "ChannelProfile_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "SetupPhoto" ADD CONSTRAINT "SetupPhoto_channelProfileId_fkey" FOREIGN KEY ("channelProfileId") REFERENCES "ChannelProfile"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ChannelLink" ADD CONSTRAINT "ChannelLink_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneTwoKitOptionTuning" ADD CONSTRAINT "WarzoneTwoKitOptionTuning_kitId_fkey" FOREIGN KEY ("kitId") REFERENCES "WarzoneTwoKit"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneTwoKitOptionTuning" ADD CONSTRAINT "WarzoneTwoKitOptionTuning_kitOptionId_fkey" FOREIGN KEY ("kitOptionId") REFERENCES "WarzoneTwoKitOption"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ChannelPlan" ADD CONSTRAINT "ChannelPlan_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ChannelPcSpec" ADD CONSTRAINT "ChannelPcSpec_channelProfileId_fkey" FOREIGN KEY ("channelProfileId") REFERENCES "ChannelProfile"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneTwoKitOption" ADD CONSTRAINT "WarzoneTwoKitOption_kitBaseId_fkey" FOREIGN KEY ("kitBaseId") REFERENCES "WarzoneTwoKitBase"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ChannelAffiliate" ADD CONSTRAINT "ChannelAffiliate_channelProfileId_fkey" FOREIGN KEY ("channelProfileId") REFERENCES "ChannelProfile"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneTwoKit" ADD CONSTRAINT "WarzoneTwoKit_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneTwoKit" ADD CONSTRAINT "WarzoneTwoKit_baseId_fkey" FOREIGN KEY ("baseId") REFERENCES "WarzoneTwoKitBase"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneTwoKit" ADD CONSTRAINT "WarzoneTwoKit_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneTwoCommandCode" ADD CONSTRAINT "WarzoneTwoCommandCode_kitBaseId_fkey" FOREIGN KEY ("kitBaseId") REFERENCES "WarzoneTwoKitBase"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_WarzoneTwoKitToWarzoneTwoKitOption" ADD CONSTRAINT "_WarzoneTwoKitToWarzoneTwoKitOption_A_fkey" FOREIGN KEY ("A") REFERENCES "WarzoneTwoKit"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_WarzoneTwoKitToWarzoneTwoKitOption" ADD CONSTRAINT "_WarzoneTwoKitToWarzoneTwoKitOption_B_fkey" FOREIGN KEY ("B") REFERENCES "WarzoneTwoKitOption"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ChannelBrandColor" ADD CONSTRAINT "ChannelBrandColor_channelProfileId_fkey" FOREIGN KEY ("channelProfileId") REFERENCES "ChannelProfile"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneTwoKitBase" ADD CONSTRAINT "WarzoneTwoKitBase_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "WarzoneTwoKitBaseCategory"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneTwoKitBase" ADD CONSTRAINT "WarzoneTwoKitBase_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ChannelManager" ADD CONSTRAINT "ChannelManager_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneKit" ADD CONSTRAINT "WarzoneKit_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneKit" ADD CONSTRAINT "WarzoneKit_baseId_fkey" FOREIGN KEY ("baseId") REFERENCES "WarzoneKitBase"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneKit" ADD CONSTRAINT "WarzoneKit_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneKitBase" ADD CONSTRAINT "WarzoneKitBase_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "WarzoneKitBaseCategory"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneKitBase" ADD CONSTRAINT "WarzoneKitBase_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneKitOption" ADD CONSTRAINT "WarzoneKitOption_kitBaseId_fkey" FOREIGN KEY ("kitBaseId") REFERENCES "WarzoneKitBase"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ChannelCustomGameCommand" ADD CONSTRAINT "ChannelCustomGameCommand_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ChannelCustomGameCommand" ADD CONSTRAINT "ChannelCustomGameCommand_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_ChannelToGame" ADD CONSTRAINT "_ChannelToGame_A_fkey" FOREIGN KEY ("A") REFERENCES "Channel"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_ChannelToGame" ADD CONSTRAINT "_ChannelToGame_B_fkey" FOREIGN KEY ("B") REFERENCES "Game"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ChannelCreatorCode" ADD CONSTRAINT "ChannelCreatorCode_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ChannelCreatorCode" ADD CONSTRAINT "ChannelCreatorCode_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_GameToGenre" ADD CONSTRAINT "_GameToGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_GameToGenre" ADD CONSTRAINT "_GameToGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_WarzoneKitToWarzoneKitOption" ADD CONSTRAINT "_WarzoneKitToWarzoneKitOption_A_fkey" FOREIGN KEY ("A") REFERENCES "WarzoneKit"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_WarzoneKitToWarzoneKitOption" ADD CONSTRAINT "_WarzoneKitToWarzoneKitOption_B_fkey" FOREIGN KEY ("B") REFERENCES "WarzoneKitOption"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "WarzoneCommandCode" ADD CONSTRAINT "WarzoneCommandCode_kitBaseId_fkey" FOREIGN KEY ("kitBaseId") REFERENCES "WarzoneKitBase"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_GameToPlatform" ADD CONSTRAINT "_GameToPlatform_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_GameToPlatform" ADD CONSTRAINT "_GameToPlatform_B_fkey" FOREIGN KEY ("B") REFERENCES "Platform"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ChannelKitOverlay" ADD CONSTRAINT "ChannelKitOverlay_primaryWzTwoKitId_fkey" FOREIGN KEY ("primaryWzTwoKitId") REFERENCES "WarzoneTwoKit"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ChannelKitOverlay" ADD CONSTRAINT "ChannelKitOverlay_secondaryWzTwoKitId_fkey" FOREIGN KEY ("secondaryWzTwoKitId") REFERENCES "WarzoneTwoKit"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ChannelKitOverlay" ADD CONSTRAINT "ChannelKitOverlay_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/