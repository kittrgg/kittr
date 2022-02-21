/*
  Warnings:

  - Made the column `preferredClasses` on table `Dog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Dog" ALTER COLUMN "preferredClasses" SET NOT NULL,
ALTER COLUMN "preferredClasses" SET DEFAULT false;
