/*
  Warnings:

  - A unique constraint covering the columns `[primaryWzTwoKitId]` on the table `ChannelKitOverlay` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[secondaryWzTwoKitId]` on the table `ChannelKitOverlay` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ChannelKitOverlay" ADD COLUMN     "primaryWzTwoKitId" TEXT,
ADD COLUMN     "secondaryWzTwoKitId" TEXT;

-- CreateTable
CREATE TABLE "WarzoneTwoKit" (
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

    CONSTRAINT "WarzoneTwoKit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WarzoneTwoKitOption" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "slotKey" TEXT NOT NULL,
    "orderPlacement" INTEGER NOT NULL,
    "kitBaseId" TEXT NOT NULL,

    CONSTRAINT "WarzoneTwoKitOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WarzoneTwoKitBase" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "blurb" TEXT NOT NULL,
    "maxOptions" INTEGER NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "WarzoneTwoKitBase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WarzoneTwoKitBaseCategory" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,

    CONSTRAINT "WarzoneTwoKitBaseCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WarzoneTwoCommandCode" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "kitBaseId" TEXT NOT NULL,

    CONSTRAINT "WarzoneTwoCommandCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_WarzoneTwoKitToWarzoneTwoKitOption" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "WarzoneTwoKitBaseCategory_displayName_key" ON "WarzoneTwoKitBaseCategory"("displayName");

-- CreateIndex
CREATE UNIQUE INDEX "_WarzoneTwoKitToWarzoneTwoKitOption_AB_unique" ON "_WarzoneTwoKitToWarzoneTwoKitOption"("A", "B");

-- CreateIndex
CREATE INDEX "_WarzoneTwoKitToWarzoneTwoKitOption_B_index" ON "_WarzoneTwoKitToWarzoneTwoKitOption"("B");

-- CreateIndex
CREATE UNIQUE INDEX "ChannelKitOverlay_primaryWzTwoKitId_key" ON "ChannelKitOverlay"("primaryWzTwoKitId");

-- CreateIndex
CREATE UNIQUE INDEX "ChannelKitOverlay_secondaryWzTwoKitId_key" ON "ChannelKitOverlay"("secondaryWzTwoKitId");

-- AddForeignKey
ALTER TABLE "ChannelKitOverlay" ADD CONSTRAINT "ChannelKitOverlay_primaryWzTwoKitId_fkey" FOREIGN KEY ("primaryWzTwoKitId") REFERENCES "WarzoneTwoKit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelKitOverlay" ADD CONSTRAINT "ChannelKitOverlay_secondaryWzTwoKitId_fkey" FOREIGN KEY ("secondaryWzTwoKitId") REFERENCES "WarzoneTwoKit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneTwoKit" ADD CONSTRAINT "WarzoneTwoKit_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneTwoKit" ADD CONSTRAINT "WarzoneTwoKit_baseId_fkey" FOREIGN KEY ("baseId") REFERENCES "WarzoneTwoKitBase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneTwoKit" ADD CONSTRAINT "WarzoneTwoKit_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneTwoKitOption" ADD CONSTRAINT "WarzoneTwoKitOption_kitBaseId_fkey" FOREIGN KEY ("kitBaseId") REFERENCES "WarzoneTwoKitBase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneTwoKitBase" ADD CONSTRAINT "WarzoneTwoKitBase_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "WarzoneTwoKitBaseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneTwoKitBase" ADD CONSTRAINT "WarzoneTwoKitBase_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneTwoCommandCode" ADD CONSTRAINT "WarzoneTwoCommandCode_kitBaseId_fkey" FOREIGN KEY ("kitBaseId") REFERENCES "WarzoneTwoKitBase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WarzoneTwoKitToWarzoneTwoKitOption" ADD CONSTRAINT "_WarzoneTwoKitToWarzoneTwoKitOption_A_fkey" FOREIGN KEY ("A") REFERENCES "WarzoneTwoKit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WarzoneTwoKitToWarzoneTwoKitOption" ADD CONSTRAINT "_WarzoneTwoKitToWarzoneTwoKitOption_B_fkey" FOREIGN KEY ("B") REFERENCES "WarzoneTwoKitOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;
