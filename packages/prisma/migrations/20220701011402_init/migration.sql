-- CreateEnum
CREATE TYPE "AdminRole" AS ENUM ('SUPER', 'DEFAULT');

-- CreateEnum
CREATE TYPE "LinkProperty" AS ENUM ('TWITCH', 'YOUTUBE', 'INSTAGRAM', 'TWITTER', 'FACEBOOK', 'DISCORD', 'TIKTOK');

-- CreateEnum
CREATE TYPE "ChannelPlanType" AS ENUM ('PREMIUM', 'BASIC');

-- CreateEnum
CREATE TYPE "ChannelBrandColorTypes" AS ENUM ('PRIMARY', 'SECONDARY', 'ACCENT');

-- CreateEnum
CREATE TYPE "ChannelManagerRoles" AS ENUM ('OWNER', 'ADMIN', 'EDITOR');

-- CreateTable
CREATE TABLE "Administrator" (
    "id" TEXT NOT NULL,
    "firebaseUserId" TEXT NOT NULL,
    "role" "AdminRole" NOT NULL,

    CONSTRAINT "Administrator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Channel" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "displayName" TEXT NOT NULL,
    "urlSafeName" TEXT NOT NULL,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "previousUpdater" TEXT,

    CONSTRAINT "Channel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelProfile" (
    "id" TEXT NOT NULL,
    "hasCoverPhoto" BOOLEAN NOT NULL DEFAULT false,
    "hasProfileImage" BOOLEAN NOT NULL DEFAULT false,
    "youtubeAutoplay" BOOLEAN NOT NULL DEFAULT false,
    "channelId" TEXT NOT NULL,

    CONSTRAINT "ChannelProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SetupPhoto" (
    "id" TEXT NOT NULL,
    "channelProfileId" TEXT NOT NULL,
    "slot" INTEGER NOT NULL,
    "exists" BOOLEAN NOT NULL,

    CONSTRAINT "SetupPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelLink" (
    "id" TEXT NOT NULL,
    "property" "LinkProperty" NOT NULL,
    "value" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,

    CONSTRAINT "ChannelLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelPlan" (
    "id" TEXT NOT NULL,
    "stripeSubscriptionId" TEXT,
    "type" "ChannelPlanType" NOT NULL DEFAULT E'BASIC',
    "channelId" TEXT NOT NULL,

    CONSTRAINT "ChannelPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelPcSpec" (
    "id" TEXT NOT NULL,
    "partType" TEXT NOT NULL,
    "partName" TEXT NOT NULL,
    "channelProfileId" TEXT NOT NULL,

    CONSTRAINT "ChannelPcSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelAffiliate" (
    "id" TEXT NOT NULL,
    "code" TEXT,
    "description" TEXT,
    "company" TEXT,
    "url" TEXT,
    "channelProfileId" TEXT,

    CONSTRAINT "ChannelAffiliate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelBrandColor" (
    "id" TEXT NOT NULL,
    "type" "ChannelBrandColorTypes" NOT NULL,
    "value" TEXT NOT NULL,
    "channelProfileId" TEXT,

    CONSTRAINT "ChannelBrandColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelManager" (
    "id" TEXT NOT NULL,
    "firebaseId" TEXT NOT NULL,
    "role" "ChannelManagerRoles" NOT NULL,
    "channelId" TEXT NOT NULL,

    CONSTRAINT "ChannelManager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelKitOverlay" (
    "id" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "backgroundColorPrimary" TEXT,
    "backgroundColorSecondary" TEXT,
    "textColorPrimary" TEXT,
    "textColorSecondary" TEXT,
    "textColorAccent" TEXT,
    "isOverlayVisible" BOOLEAN NOT NULL DEFAULT false,
    "primaryKitId" TEXT,
    "secondaryKitId" TEXT,

    CONSTRAINT "ChannelKitOverlay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WarzoneKit" (
    "id" TEXT NOT NULL,
    "customTitle" TEXT,
    "blueprint" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "youtubeUrl" TEXT,
    "tiktokUrl" TEXT,
    "quote" TEXT,
    "gameId" TEXT NOT NULL,
    "baseId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,

    CONSTRAINT "WarzoneKit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelCustomGameCommand" (
    "id" TEXT NOT NULL,
    "command" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,

    CONSTRAINT "ChannelCustomGameCommand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelCreatorCode" (
    "id" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "ChannelCreatorCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WarzoneKitOption" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "slotKey" TEXT NOT NULL,
    "orderPlacement" INTEGER NOT NULL,
    "kitBaseId" TEXT NOT NULL,

    CONSTRAINT "WarzoneKitOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WarzoneKitBase" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "blurb" TEXT NOT NULL,
    "maxOptions" INTEGER NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "WarzoneKitBase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WarzoneKitBaseCategory" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,

    CONSTRAINT "WarzoneKitBaseCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WarzoneCommandCode" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "kitBaseId" TEXT NOT NULL,

    CONSTRAINT "WarzoneCommandCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "urlSafeName" TEXT NOT NULL,
    "backgroundImageUrl" TEXT NOT NULL,
    "titleImageUrl" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "blurDataUrl" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChannelToGame" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_WarzoneKitToWarzoneKitOption" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GameToGenre" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GameToPlatform" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Channel_displayName_key" ON "Channel"("displayName");

-- CreateIndex
CREATE UNIQUE INDEX "Channel_urlSafeName_key" ON "Channel"("urlSafeName");

-- CreateIndex
CREATE UNIQUE INDEX "ChannelProfile_channelId_key" ON "ChannelProfile"("channelId");

-- CreateIndex
CREATE UNIQUE INDEX "SetupPhoto_channelProfileId_slot_key" ON "SetupPhoto"("channelProfileId", "slot");

-- CreateIndex
CREATE UNIQUE INDEX "ChannelPlan_channelId_key" ON "ChannelPlan"("channelId");

-- CreateIndex
CREATE UNIQUE INDEX "ChannelKitOverlay_channelId_key" ON "ChannelKitOverlay"("channelId");

-- CreateIndex
CREATE UNIQUE INDEX "ChannelKitOverlay_primaryKitId_key" ON "ChannelKitOverlay"("primaryKitId");

-- CreateIndex
CREATE UNIQUE INDEX "ChannelKitOverlay_secondaryKitId_key" ON "ChannelKitOverlay"("secondaryKitId");

-- CreateIndex
CREATE UNIQUE INDEX "WarzoneKitBaseCategory_displayName_key" ON "WarzoneKitBaseCategory"("displayName");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_displayName_key" ON "Platform"("displayName");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_displayName_key" ON "Genre"("displayName");

-- CreateIndex
CREATE UNIQUE INDEX "_ChannelToGame_AB_unique" ON "_ChannelToGame"("A", "B");

-- CreateIndex
CREATE INDEX "_ChannelToGame_B_index" ON "_ChannelToGame"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_WarzoneKitToWarzoneKitOption_AB_unique" ON "_WarzoneKitToWarzoneKitOption"("A", "B");

-- CreateIndex
CREATE INDEX "_WarzoneKitToWarzoneKitOption_B_index" ON "_WarzoneKitToWarzoneKitOption"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GameToGenre_AB_unique" ON "_GameToGenre"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToGenre_B_index" ON "_GameToGenre"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GameToPlatform_AB_unique" ON "_GameToPlatform"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToPlatform_B_index" ON "_GameToPlatform"("B");

-- AddForeignKey
ALTER TABLE "ChannelProfile" ADD CONSTRAINT "ChannelProfile_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SetupPhoto" ADD CONSTRAINT "SetupPhoto_channelProfileId_fkey" FOREIGN KEY ("channelProfileId") REFERENCES "ChannelProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelLink" ADD CONSTRAINT "ChannelLink_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelPlan" ADD CONSTRAINT "ChannelPlan_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelPcSpec" ADD CONSTRAINT "ChannelPcSpec_channelProfileId_fkey" FOREIGN KEY ("channelProfileId") REFERENCES "ChannelProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelAffiliate" ADD CONSTRAINT "ChannelAffiliate_channelProfileId_fkey" FOREIGN KEY ("channelProfileId") REFERENCES "ChannelProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelBrandColor" ADD CONSTRAINT "ChannelBrandColor_channelProfileId_fkey" FOREIGN KEY ("channelProfileId") REFERENCES "ChannelProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelManager" ADD CONSTRAINT "ChannelManager_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelKitOverlay" ADD CONSTRAINT "ChannelKitOverlay_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelKitOverlay" ADD CONSTRAINT "ChannelKitOverlay_primaryKitId_fkey" FOREIGN KEY ("primaryKitId") REFERENCES "WarzoneKit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelKitOverlay" ADD CONSTRAINT "ChannelKitOverlay_secondaryKitId_fkey" FOREIGN KEY ("secondaryKitId") REFERENCES "WarzoneKit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneKit" ADD CONSTRAINT "WarzoneKit_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneKit" ADD CONSTRAINT "WarzoneKit_baseId_fkey" FOREIGN KEY ("baseId") REFERENCES "WarzoneKitBase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneKit" ADD CONSTRAINT "WarzoneKit_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelCustomGameCommand" ADD CONSTRAINT "ChannelCustomGameCommand_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelCustomGameCommand" ADD CONSTRAINT "ChannelCustomGameCommand_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelCreatorCode" ADD CONSTRAINT "ChannelCreatorCode_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelCreatorCode" ADD CONSTRAINT "ChannelCreatorCode_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneKitOption" ADD CONSTRAINT "WarzoneKitOption_kitBaseId_fkey" FOREIGN KEY ("kitBaseId") REFERENCES "WarzoneKitBase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneKitBase" ADD CONSTRAINT "WarzoneKitBase_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "WarzoneKitBaseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneKitBase" ADD CONSTRAINT "WarzoneKitBase_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneCommandCode" ADD CONSTRAINT "WarzoneCommandCode_kitBaseId_fkey" FOREIGN KEY ("kitBaseId") REFERENCES "WarzoneKitBase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChannelToGame" ADD CONSTRAINT "_ChannelToGame_A_fkey" FOREIGN KEY ("A") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChannelToGame" ADD CONSTRAINT "_ChannelToGame_B_fkey" FOREIGN KEY ("B") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WarzoneKitToWarzoneKitOption" ADD CONSTRAINT "_WarzoneKitToWarzoneKitOption_A_fkey" FOREIGN KEY ("A") REFERENCES "WarzoneKit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WarzoneKitToWarzoneKitOption" ADD CONSTRAINT "_WarzoneKitToWarzoneKitOption_B_fkey" FOREIGN KEY ("B") REFERENCES "WarzoneKitOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToGenre" ADD CONSTRAINT "_GameToGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToGenre" ADD CONSTRAINT "_GameToGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPlatform" ADD CONSTRAINT "_GameToPlatform_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPlatform" ADD CONSTRAINT "_GameToPlatform_B_fkey" FOREIGN KEY ("B") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;
