-- CreateTable
CREATE TABLE "ChannelCustomGameCommand" (
    "id" TEXT NOT NULL,
    "command" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,

    CONSTRAINT "ChannelCustomGameCommand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ChannelCustomGameCommand" ADD CONSTRAINT "ChannelCustomGameCommand_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelCustomGameCommand" ADD CONSTRAINT "ChannelCustomGameCommand_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
