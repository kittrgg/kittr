/*
  Warnings:

  - Added the required column `kitId` to the `KitOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderPlacement` to the `KitOption` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "KitOption" ADD COLUMN     "kitId" TEXT NOT NULL,
ADD COLUMN     "orderPlacement" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "KitOption" ADD CONSTRAINT "KitOption_kitId_fkey" FOREIGN KEY ("kitId") REFERENCES "KitBase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
