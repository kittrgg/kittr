/*
  Warnings:

  - A unique constraint covering the columns `[displayName]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[displayName]` on the table `Platform` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "KitBase" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "blurb" TEXT NOT NULL,
    "maxOptions" INTEGER NOT NULL,

    CONSTRAINT "KitBase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KitBaseCategory" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "kitBaseId" TEXT NOT NULL,

    CONSTRAINT "KitBaseCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommandCode" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "kitBaseId" TEXT NOT NULL,

    CONSTRAINT "CommandCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KitStat" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "kitBaseId" TEXT NOT NULL,

    CONSTRAINT "KitStat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_displayName_key" ON "Genre"("displayName");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_displayName_key" ON "Platform"("displayName");

-- AddForeignKey
ALTER TABLE "KitBase" ADD CONSTRAINT "KitBase_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KitBaseCategory" ADD CONSTRAINT "KitBaseCategory_kitBaseId_fkey" FOREIGN KEY ("kitBaseId") REFERENCES "KitBase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommandCode" ADD CONSTRAINT "CommandCode_kitBaseId_fkey" FOREIGN KEY ("kitBaseId") REFERENCES "KitBase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KitStat" ADD CONSTRAINT "KitStat_kitBaseId_fkey" FOREIGN KEY ("kitBaseId") REFERENCES "KitBase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
