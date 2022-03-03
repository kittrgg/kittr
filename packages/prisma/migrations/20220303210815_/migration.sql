/*
  Warnings:

  - You are about to drop the column `kitBaseId` on the `KitBaseCategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `BlogPost` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `BlogPost` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[displayName]` on the table `KitBaseCategory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `KitBase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "KitBaseCategory" DROP CONSTRAINT "KitBaseCategory_kitBaseId_fkey";

-- AlterTable
ALTER TABLE "KitBase" ADD COLUMN     "categoryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "KitBaseCategory" DROP COLUMN "kitBaseId";

-- CreateIndex
CREATE UNIQUE INDEX "BlogPost_title_key" ON "BlogPost"("title");

-- CreateIndex
CREATE UNIQUE INDEX "BlogPost_slug_key" ON "BlogPost"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "KitBaseCategory_displayName_key" ON "KitBaseCategory"("displayName");

-- AddForeignKey
ALTER TABLE "KitBase" ADD CONSTRAINT "KitBase_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "KitBaseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
