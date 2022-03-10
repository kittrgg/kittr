/*
  Warnings:

  - Added the required column `gameId` to the `Kit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Kit" ADD COLUMN     "gameId" TEXT NOT NULL,
ALTER COLUMN "customTitle" DROP NOT NULL,
ALTER COLUMN "blueprint" DROP NOT NULL,
ALTER COLUMN "featured" SET DEFAULT false,
ALTER COLUMN "youtubeUrl" DROP NOT NULL,
ALTER COLUMN "tiktokUrl" DROP NOT NULL,
ALTER COLUMN "quote" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Kit" ADD CONSTRAINT "Kit_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
