/*
  Warnings:

  - You are about to drop the column `primaryKitId` on the `ChannelKitOverlay` table. All the data in the column will be lost.
  - You are about to drop the column `secondaryKitId` on the `ChannelKitOverlay` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChannelKitOverlay" DROP CONSTRAINT "ChannelKitOverlay_primaryKitId_fkey";

-- DropForeignKey
ALTER TABLE "ChannelKitOverlay" DROP CONSTRAINT "ChannelKitOverlay_secondaryKitId_fkey";

-- DropIndex
DROP INDEX "ChannelKitOverlay_primaryKitId_key";

-- DropIndex
DROP INDEX "ChannelKitOverlay_secondaryKitId_key";

-- AlterTable
ALTER TABLE "ChannelKitOverlay" DROP COLUMN "primaryKitId",
DROP COLUMN "secondaryKitId",
ALTER COLUMN "backgroundColorPrimary" SET DEFAULT '#636363',
ALTER COLUMN "backgroundColorSecondary" SET DEFAULT '#2F2F31',
ALTER COLUMN "textColorPrimary" SET DEFAULT '#ffffff',
ALTER COLUMN "textColorSecondary" SET DEFAULT '#2F2F31',
ALTER COLUMN "textColorAccent" SET DEFAULT '#9B9B9B';
