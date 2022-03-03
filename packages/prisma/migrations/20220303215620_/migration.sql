-- CreateTable
CREATE TABLE "Channel" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "displayName" TEXT NOT NULL,
    "urlSafeName" TEXT NOT NULL,
    "viewCount" INTEGER NOT NULL,
    "previousUpdater" TEXT NOT NULL,

    CONSTRAINT "Channel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kit" (
    "id" TEXT NOT NULL,
    "customTitle" TEXT NOT NULL,
    "blueprint" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "youtubeUrl" TEXT NOT NULL,
    "tiktokUrl" TEXT NOT NULL,
    "quote" TEXT NOT NULL,
    "kitBaseId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,

    CONSTRAINT "Kit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelAffiliateCode" (
    "id" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "ChannelAffiliateCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChannelToGame" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_KitToKitOption" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ChannelAffiliateCodeToGame" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ChannelToGame_AB_unique" ON "_ChannelToGame"("A", "B");

-- CreateIndex
CREATE INDEX "_ChannelToGame_B_index" ON "_ChannelToGame"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_KitToKitOption_AB_unique" ON "_KitToKitOption"("A", "B");

-- CreateIndex
CREATE INDEX "_KitToKitOption_B_index" ON "_KitToKitOption"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ChannelAffiliateCodeToGame_AB_unique" ON "_ChannelAffiliateCodeToGame"("A", "B");

-- CreateIndex
CREATE INDEX "_ChannelAffiliateCodeToGame_B_index" ON "_ChannelAffiliateCodeToGame"("B");

-- AddForeignKey
ALTER TABLE "Kit" ADD CONSTRAINT "Kit_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kit" ADD CONSTRAINT "Kit_kitBaseId_fkey" FOREIGN KEY ("kitBaseId") REFERENCES "KitBase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelAffiliateCode" ADD CONSTRAINT "ChannelAffiliateCode_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChannelToGame" ADD FOREIGN KEY ("A") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChannelToGame" ADD FOREIGN KEY ("B") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_KitToKitOption" ADD FOREIGN KEY ("A") REFERENCES "Kit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_KitToKitOption" ADD FOREIGN KEY ("B") REFERENCES "KitOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChannelAffiliateCodeToGame" ADD FOREIGN KEY ("A") REFERENCES "ChannelAffiliateCode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChannelAffiliateCodeToGame" ADD FOREIGN KEY ("B") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
