/*
  Warnings:

  - You are about to drop the `GenresOnGames` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlatformsOnGames` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GenresOnGames" DROP CONSTRAINT "GenresOnGames_gameId_fkey";

-- DropForeignKey
ALTER TABLE "GenresOnGames" DROP CONSTRAINT "GenresOnGames_genreId_fkey";

-- DropForeignKey
ALTER TABLE "PlatformsOnGames" DROP CONSTRAINT "PlatformsOnGames_gameId_fkey";

-- DropForeignKey
ALTER TABLE "PlatformsOnGames" DROP CONSTRAINT "PlatformsOnGames_platformId_fkey";

-- DropTable
DROP TABLE "GenresOnGames";

-- DropTable
DROP TABLE "PlatformsOnGames";

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
CREATE UNIQUE INDEX "_GameToGenre_AB_unique" ON "_GameToGenre"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToGenre_B_index" ON "_GameToGenre"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GameToPlatform_AB_unique" ON "_GameToPlatform"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToPlatform_B_index" ON "_GameToPlatform"("B");

-- AddForeignKey
ALTER TABLE "_GameToGenre" ADD FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToGenre" ADD FOREIGN KEY ("B") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPlatform" ADD FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPlatform" ADD FOREIGN KEY ("B") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;
