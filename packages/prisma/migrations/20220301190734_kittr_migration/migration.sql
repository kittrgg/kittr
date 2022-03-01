-- CreateTable
CREATE TABLE "KitOption" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "slotKey" TEXT NOT NULL,

    CONSTRAINT "KitOption_pkey" PRIMARY KEY ("id")
);
